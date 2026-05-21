// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    const isOpen = nav.classList.contains('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
}

// Scroll fade-in
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

// Highlight active nav based on current path
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a[data-nav]').forEach(a => {
  if (a.getAttribute('data-nav') === path.replace('.html','') ||
      (path === 'index.html' && a.getAttribute('data-nav') === 'home')) {
    a.classList.add('is-active');
  }
});

// Course filter (on /courses.html)
const chips = document.querySelectorAll('[data-filter]');
const courses = document.querySelectorAll('[data-pillar-tag]');
if (chips.length && courses.length) {
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      const f = chip.getAttribute('data-filter');
      courses.forEach(card => {
        const tags = card.getAttribute('data-pillar-tag').split(',');
        card.style.display = (f === 'all' || tags.includes(f)) ? '' : 'none';
      });
    });
  });
}

// Booking form — required-field validation + submit feedback
const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Required fields: 'group' = checkbox/radio set, 'email' = format-checked
  const reqFields = [
    { sel: 'input[name="courses[]"]', kind: 'group' },
    { sel: 'input[name="company"]',   kind: 'value' },
    { sel: 'input[name="contact"]',   kind: 'value' },
    { sel: 'input[name="email"]',     kind: 'email' },
    { sel: 'input[name="size"]',      kind: 'group' },
    { sel: 'select[name="source"]',   kind: 'value' },
  ];

  // The wrapper that receives the .has-error class (inner div for inline rows)
  const wrapperOf = el =>
    el.closest('.form__group--inline') ? el.parentElement
                                       : el.closest('.form__group');

  const clearError = f => f.wrap && f.wrap.classList.remove('has-error');

  // Attach a single error-message element to each required field
  reqFields.forEach(f => {
    const el = bookingForm.querySelector(f.sel);
    if (!el) return;
    f.wrap = wrapperOf(el);
    f.msg = document.createElement('p');
    f.msg.className = 'form__error';
    f.msg.setAttribute('role', 'alert');
    f.wrap.appendChild(f.msg);
    bookingForm.querySelectorAll(f.sel).forEach(input => {
      input.addEventListener('input',  () => clearError(f));
      input.addEventListener('change', () => clearError(f));
    });
  });

  const fieldValid = f => {
    const els = bookingForm.querySelectorAll(f.sel);
    if (f.kind === 'group') return [...els].some(i => i.checked);
    const v = els[0].value.trim();
    if (f.kind === 'email') return v !== '' && EMAIL_RE.test(v);
    return v !== '';
  };

  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    let firstInvalid = null;

    reqFields.forEach(f => {
      if (!f.wrap) return;
      const ok = fieldValid(f);
      f.wrap.classList.toggle('has-error', !ok);
      if (!ok) {
        const raw = (bookingForm.querySelector(f.sel).value || '').trim();
        f.msg.textContent = (f.kind === 'email' && raw !== '')
          ? '請輸入有效的 Email 格式（需包含 @ 與網域）'
          : '此欄位為必填';
        if (!firstInvalid) firstInvalid = f;
      }
    });

    // Missing required field → scroll to it and highlight
    if (firstInvalid) {
      firstInvalid.wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const focusEl = bookingForm.querySelector(firstInvalid.sel);
      if (focusEl) setTimeout(() => focusEl.focus({ preventScroll: true }), 450);
      return;
    }

    // Success
    const success = document.querySelector('#booking-success');
    bookingForm.style.display = 'none';
    if (success) {
      success.style.display = 'block';
      window.scrollTo({ top: success.offsetTop - 120, behavior: 'smooth' });
    }
  });
}

// Prefill course from URL query (?course=xyz) on booking page
const params = new URLSearchParams(location.search);
const c = params.get('course');
if (c) {
  const cb = document.querySelector(`input[name="courses[]"][value="${c}"]`);
  if (cb) cb.checked = true;
}
