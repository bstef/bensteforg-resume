(() => {
  // Footer copyright year
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.getElementById('mobileNavToggle');
  const overlay = document.getElementById('mobileNavOverlay');
  const nav = document.getElementById('mobileNav');

  const closeMenu = () => {
    overlay.hidden = true;
    nav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    overlay.hidden = false;
    nav.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  };

  toggle.addEventListener('click', () => {
    if (nav.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  // Scroll-spy nav highlighting
  const navLinks = [...document.querySelectorAll('.site-nav a'), ...nav.querySelectorAll('a')];
  const sections = ['about', 'resume', 'skills', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const setActive = id => {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  // "skills" is nested inside the "resume" section, so this walks sections in
  // document order and keeps the last one whose top has scrolled past the
  // header — that naturally lets the more specific nested anchor win.
  const headerOffset = 96;
  let ticking = false;

  const updateActiveSection = () => {
    ticking = false;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top - headerOffset <= 0) {
        current = section.id;
      }
    }
    setActive(current);
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveSection);
      }
    },
    {passive: true},
  );

  updateActiveSection();

  // Contact form: no backend wired up yet, just log for now
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Data to send: ', data);
  });
})();
