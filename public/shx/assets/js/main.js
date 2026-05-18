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

// Booking form (mock submit)
const form = document.querySelector('#booking-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.querySelector('#booking-success');
    form.style.display = 'none';
    if (success) success.style.display = 'block';
    window.scrollTo({ top: success.offsetTop - 120, behavior: 'smooth' });
  });
}

// Prefill course from URL query (?course=xyz) on booking page
const params = new URLSearchParams(location.search);
const c = params.get('course');
if (c) {
  const cb = document.querySelector(`input[name="courses[]"][value="${c}"]`);
  if (cb) cb.checked = true;
}
