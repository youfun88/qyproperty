# CI/CD Deployment Runbook — Next.js → Google Cloud Run

How code gets from your laptop to production, and how to replicate this setup for a
**new website / new domain** from scratch.

---

## 1. The flow

```
  Local laptop                GitHub                  GitHub Actions                 Google Cloud
 ┌────────────┐   git push   ┌────────┐   triggers   ┌──────────────────┐         ┌─────────────────┐
 │ edit code  │ ───────────► │  main  │ ───────────► │ build Docker img │ ──push─►│ Artifact        │
 │ git commit │              │ branch │              │                  │         │ Registry        │
 └────────────┘              └────────┘              │ deploy to Cloud  │ ──────► │ Cloud Run       │
                                                     │ Run              │         │ (live service)  │
                                                     └──────────────────┘         └────────┬────────┘
                                                                                           │
                                                                          custom domain ───┘
                                                                          (DNS → your site)
```

**One rule: a push to the `main` branch = a deploy to production.** There is no manual
deploy step. Don't push unfinished work to `main`.

---

## 2. Day-to-day: how to ship a change

```bash
# 1. make your edits locally, then:
git add -A
git commit -m "describe what changed"
git push origin main

# 2. watch the deploy (optional):
gh run watch          # live progress in the terminal
# or open the repo's "Actions" tab on GitHub
```

About **2 minutes** after the push, the change is live in production. If the Actions run
shows a red ✗, the deploy failed and production was **not** updated — see Troubleshooting.

---

## 3. This project's settings (qyproperty) — quick reference

| Thing | Value |
|-------|-------|
| GCP account (login) | `wulawintl@gmail.com` |
| GCP project ID | `qyproperty` |
| Region | `asia-east1` |
| Cloud Run service | `qyproperty` |
| Artifact Registry image | `asia-east1-docker.pkg.dev/qyproperty/qyproperty/web` |
| GitHub repo | `youfun88/qyproperty` |
| Deploy trigger | push to `main` |
| GitHub secret used | `GCP_SA_KEY` |
| Domain | `qyproperty.com` (DNS hosted at GoDaddy) |

The two files that make CI/CD work, both already in this repo:
- `.github/workflows/deploy.yml` — the GitHub Actions pipeline
- `Dockerfile` — how the app is packaged into a container

---

## 4. Setting up a NEW project / domain from scratch

Repeat these steps for a new website. First fill in your new values:

| Placeholder | Example | Your value |
|-------------|---------|------------|
| `PROJECT_ID`   | `my-new-site`      | __________ |
| `REGION`       | `asia-east1`       | __________ |
| `SERVICE`      | `my-new-site`      | __________ |
| `REPO`         | `my-new-site` (Artifact Registry repo name) | __________ |
| `IMAGE`        | `web`              | __________ |
| `DOMAIN`       | `mynewsite.com`    | __________ |

> You may either create a brand-new GCP project, or reuse the existing `qyproperty`
> project with a new service name. The steps below assume a new project — skip Step 1
> if you reuse an existing one.

### Step 0 — Prerequisites
- A GitHub repository containing the app code.
- The `Dockerfile` and `next.config.ts` from this repo (see Step 6).
- Either the **gcloud CLI** installed locally, **or** use **Cloud Shell** in the browser
  (open [console.cloud.google.com](https://console.cloud.google.com) → `>_` icon — no install needed).
- The new domain registered at a registrar (GoDaddy, etc.).

### Step 1 — Create the GCP project
```bash
gcloud projects create PROJECT_ID
gcloud config set project PROJECT_ID
```
Then link a billing account: Cloud Console → **Billing** → link the project.

### Step 2 — Enable the required APIs
```bash
gcloud services enable run.googleapis.com artifactregistry.googleapis.com --project PROJECT_ID
```

### Step 3 — Create the Artifact Registry repository
This is where the built Docker images are stored.
```bash
gcloud artifacts repositories create REPO \
  --repository-format=docker \
  --location=REGION \
  --project PROJECT_ID
```

### Step 4 — Create the deploy service account + grant roles
GitHub Actions logs in as this service account.
```bash
# create it
gcloud iam service-accounts create github-deployer \
  --display-name="GitHub Actions deployer" \
  --project PROJECT_ID

# the account's email is:
#   github-deployer@PROJECT_ID.iam.gserviceaccount.com

# grant the 3 roles it needs
for ROLE in roles/run.admin roles/iam.serviceAccountUser roles/artifactregistry.writer; do
  gcloud projects add-iam-policy-binding PROJECT_ID \
    --member="serviceAccount:github-deployer@PROJECT_ID.iam.gserviceaccount.com" \
    --role="$ROLE"
done

# create a JSON key file (this is the secret — keep it safe, never commit it)
gcloud iam service-accounts keys create key.json \
  --iam-account=github-deployer@PROJECT_ID.iam.gserviceaccount.com
```
What the roles do:
- `run.admin` — deploy/update Cloud Run services
- `iam.serviceAccountUser` — let the deploy act as the Cloud Run runtime account
- `artifactregistry.writer` — push Docker images to Artifact Registry

### Step 5 — Add the key to GitHub as a secret
GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**:
- **Name:** `GCP_SA_KEY`
- **Value:** paste the entire contents of `key.json`

Then **delete `key.json` from your laptop** — it's no longer needed and is a credential.
Never commit it to git.

### Step 6 — Add the Dockerfile and Next.js config
Copy `Dockerfile` from this repo. It is a 3-stage build that produces a small Next.js
**standalone** image. For it to work, `next.config.ts` **must** contain:
```ts
const nextConfig = {
  output: "standalone",
  // ...
};
```
Without `output: "standalone"` the Docker build fails (no `.next/standalone` folder).

### Step 7 — Add the GitHub Actions workflow
Create `.github/workflows/deploy.yml`. Use this repo's file as the template — replace the
hard-coded values with your new ones:
```yaml
name: Deploy to Cloud Run
on:
  push:
    branches: [main]
permissions:
  contents: read
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - name: Authenticate to Google Cloud
        uses: google-github-actions/auth@v3
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY }}

      - name: Configure Docker for Artifact Registry
        run: gcloud auth configure-docker REGION-docker.pkg.dev --quiet

      - name: Build and push Docker image
        run: |
          IMAGE="REGION-docker.pkg.dev/PROJECT_ID/REPO/IMAGE"
          TAG_SHA="${GITHUB_SHA::7}"
          docker build -t "${IMAGE}:${TAG_SHA}" -t "${IMAGE}:latest" .
          docker push "${IMAGE}:${TAG_SHA}"
          docker push "${IMAGE}:latest"

      - name: Deploy to Cloud Run
        uses: google-github-actions/deploy-cloudrun@v3
        with:
          service: SERVICE
          region: REGION
          image: REGION-docker.pkg.dev/PROJECT_ID/REPO/IMAGE:latest
          flags: --port=3000 --allow-unauthenticated
```
> ⚠️ The image tag in the **build** step and the **deploy** step must match. Here both
> use `:latest` — keep it that way. (The original outage in this project was caused by
> the build pushing one tag and the deploy asking for a different one.)

### Step 8 — First deploy
```bash
git add -A
git commit -m "add CI/CD: deploy to Cloud Run"
git push origin main
```
Watch the **Actions** tab. The first run also creates the Cloud Run service. When it's
green, find the service URL:
Cloud Console → **Cloud Run** → click `SERVICE` → the `*.run.app` URL at the top.

### Step 9 — Map the custom domain
Do this once the `*.run.app` URL works.

**9a. In Cloud Run** (`https://console.cloud.google.com/run/domains?project=PROJECT_ID`):
- Click **Add Mapping**. Map **`DOMAIN`** (apex) to service `SERVICE`.
  You'll first verify ownership of the domain (one-time, via a TXT record).
  Google then gives you **A** and **AAAA** records.
- Click **Add Mapping** again. Map the **`www`** subdomain to `SERVICE`.
  Google gives you a **CNAME → `ghs.googlehosted.com`**.

**9b. In your DNS host (GoDaddy)** — DNS Records for `DOMAIN`:
- Add the **A** records (apex `@`) Google gave you — typically `216.239.32.21`,
  `216.239.34.21`, `216.239.36.21`, `216.239.38.21`.
- Add the **AAAA** records (apex `@`) Google gave you — the `2001:4860:4802:...` ones.
- Add/edit the **CNAME** for `www` → `ghs.googlehosted.com`.
- 🚨 **Delete any A record whose value is `Parked`** (GoDaddy's parking record). If you
  leave it, ~1 in 3 visitors gets sent to a dead parking page. Also turn **off** any
  GoDaddy **Domain Forwarding / Parking**, or the `Parked` record comes back.

**9c. Wait** ~15–60 min. Google auto-issues SSL certificates. Both `https://DOMAIN` and
`https://www.DOMAIN` then load with no warnings.

### Step 10 — Verify
```bash
curl -I https://DOMAIN          # expect: HTTP/2 200
curl -I https://www.DOMAIN      # expect: HTTP/2 200
```

---

## 5. Troubleshooting (real issues hit on this project)

| Symptom | Cause | Fix |
|---------|-------|-----|
| `ERROR: Image '...:<sha>' not found` | Build step pushed one tag, deploy step asked for a different tag | Make the build tag and deploy `image:` tag identical (use `:latest`). |
| Site works only sometimes / random failures | Leftover registrar **parking** A record (`Parked` / `15.197.x.x` / `3.33.x.x`) mixed in with the real IPs; DNS round-robins onto the dead one | In GoDaddy DNS, delete the `A @ Parked` record; keep only the Google `216.239.x.x` IPs. Turn off GoDaddy forwarding/parking. |
| `www` shows an SSL / security error | No Cloud Run domain mapping (and no certificate) for the `www` hostname | Add a Cloud Run domain mapping for `www`, point `www` CNAME → `ghs.googlehosted.com`. |
| Workflow warns "Node.js 20 actions are deprecated" | GitHub Actions versions are old | Bump to current majors: `actions/checkout@v6`, `google-github-actions/auth@v3`, `google-github-actions/deploy-cloudrun@v3`. |
| Docker build fails: no `.next/standalone` | `next.config.ts` is missing `output: "standalone"` | Add `output: "standalone"` to the Next.js config. |
| Deploy fails: permission denied | Service account missing a role | Grant `run.admin`, `iam.serviceAccountUser`, `artifactregistry.writer` (Step 4). |

Useful commands:
```bash
gh run list                       # recent CI runs and pass/fail
gh run watch                      # follow the latest run live
gh run view <run-id> --log        # full logs of a run
dig +short DOMAIN                 # check what IPs the domain resolves to
```

---

## 6. Security notes
- The `GCP_SA_KEY` JSON is a credential. It lives **only** in GitHub Secrets — never in
  the repo, never on disk after Step 5.
- The service account has the **minimum** roles needed. Don't grant it `Owner`.
- To rotate the key: create a new key (Step 4), update the `GCP_SA_KEY` secret, then
  delete the old key in Cloud Console → IAM → Service Accounts → Keys.
