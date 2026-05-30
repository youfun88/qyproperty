#!/usr/bin/env bash
#
# Self-healing wrapper around `next dev`.
#
# Why this exists: Next 16.2.3 + Turbopack runs the @tailwindcss/postcss plugin
# in a child node process (.next/dev/build/postcss.js). Over a long-lived dev
# session, Turbopack respawns that worker on certain events (config re-eval,
# crash-respawn, restarts) without reaping the previous ones. They accumulate as
# live processes and eventually peg every CPU core, freezing the machine
# (observed: 1,375 workers / ~594% CPU after a ~6h session).
#
# Normal CSS HMR does NOT leak (Turbopack reuses one worker), so this wrapper
# leaves normal operation untouched and only intervenes when workers pile up.
#
#   1. Reap a stale dev server on THIS project's port + this project's leaked
#      postcss workers before starting, so you can never stack a second
#      `npm run dev` on top of a forgotten one.
#   2. Run a background watchdog that prunes leaked postcss workers if the count
#      ever exceeds MAX_WORKERS. Turbopack transparently respawns the single
#      worker it actually needs on the next compile.
#
# Everything is scoped to THIS project (port + absolute worker path) so it never
# touches dev servers for your other sites in ~/Sites (jeanriley, shx, ...).

set -euo pipefail

# Project root = parent of this script's dir, so it works regardless of CWD.
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKER_PATTERN="${PROJECT_DIR}/.next/dev/build/postcss.js"
PORT="${PORT:-3000}"
MAX_WORKERS="${DEV_MAX_POSTCSS_WORKERS:-8}"

worker_count() {
  pgrep -f "$WORKER_PATTERN" 2>/dev/null | wc -l | tr -d ' '
}

kill_workers() {
  pkill -9 -f "$WORKER_PATTERN" 2>/dev/null || true
}

reap_stale() {
  # Kill whatever already holds our dev port (a forgotten previous server).
  # Scoped to the port, so other projects on other ports are untouched.
  local pids
  pids="$(lsof -ti tcp:"$PORT" 2>/dev/null || true)"
  if [ -n "$pids" ]; then
    echo "› port ${PORT} busy — reaping previous dev server (pids: ${pids//$'\n'/ })"
    # shellcheck disable=SC2086
    kill -9 $pids 2>/dev/null || true
  fi
  # Reap any leaked postcss workers belonging to THIS project.
  kill_workers
}

echo "› reaping stale dev processes before start…"
reap_stale

# Background watchdog: prune the leak if it ever appears.
(
  while true; do
    sleep 30
    n="$(worker_count)"
    if [ "${n:-0}" -gt "$MAX_WORKERS" ]; then
      echo "⚠ ${n} PostCSS workers (> ${MAX_WORKERS}) — pruning leak; Turbopack will respawn the one it needs" >&2
      kill_workers
    fi
  done
) &
WATCHDOG_PID=$!

# Clean up the watchdog AND this project's workers on exit/Ctrl-C.
trap 'kill "$WATCHDOG_PID" 2>/dev/null || true; kill_workers' EXIT INT TERM

exec next dev "$@"
