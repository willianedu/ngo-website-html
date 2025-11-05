/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Logic for mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navContainer = document.querySelector('.header__nav');

  if (menuToggle && navContainer) {
    menuToggle.addEventListener('click', () => {
      // Use a class on the nav element for state
      navContainer.classList.toggle('active');
      
      // Optional: Add a class to the button for 'X' icon transformation
      menuToggle.classList.toggle('active');

      // ARIA attribute for accessibility
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    });
  }
});