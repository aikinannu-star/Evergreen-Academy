const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    const expanded = siteNav.classList.contains('open');
    navToggle.setAttribute('aria-expanded', expanded.toString());
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 780) {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
