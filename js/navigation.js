/**
 * navigation.js
 * Mobile menu toggle with aria-expanded state management.
 */
export function initNavigation() {
  const menuButton = document.querySelector('.menu');
  const nav = document.querySelector('#primary-nav');
  if (!menuButton || !nav) return;

  const closeNavigation = () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  // Close menu when a nav link is clicked (mobile UX)
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeNavigation();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeNavigation();
      menuButton.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('open') || nav.contains(event.target) || menuButton.contains(event.target)) return;

    closeNavigation();
  });

  const desktopViewport = window.matchMedia('(min-width: 851px)');
  desktopViewport.addEventListener('change', (event) => {
    if (event.matches) closeNavigation();
  });
}
