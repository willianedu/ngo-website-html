/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Logic for mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      // Use a class on the nav element for state
      navLinks.classList.toggle('active');
      
      // Optional: Add a class to the button for 'X' icon transformation
      menuToggle.classList.toggle('active');

      // ARIA attribute for accessibility
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    });
  }
});
