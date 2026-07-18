(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.hasAttribute('hidden');
      if (open) {
        menu.removeAttribute('hidden');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        menu.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (menu && !menu.hasAttribute('hidden')) {
        menu.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Message saved locally';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
      }, 1200);
    });
  }
})();
