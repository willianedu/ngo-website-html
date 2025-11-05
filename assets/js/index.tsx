/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// IIFE to apply the dark mode as soon as possible and prevent FOUC
(function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.classList.add('dark-mode');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
  // Logic for mobile navigation menu
  const menuToggle = document.getElementById('menu-toggle');
  // The CSS animation for the mobile menu targets the `.header__nav` container,
  // not the `ul` inside it. This selector needs to target the nav element.
  const navContainer = document.querySelector('.header__nav'); 

  if (menuToggle && navContainer) {
    menuToggle.addEventListener('click', () => {
      navContainer.classList.toggle('active');
      menuToggle.classList.toggle('active');
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    });
  }

  // Logic for dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    // Set initial icon and ARIA label based on current theme
    if (document.documentElement.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
        darkModeToggle.setAttribute('aria-label', 'Alternar para modo claro');
    } else {
        darkModeToggle.textContent = '🌙';
        darkModeToggle.setAttribute('aria-label', 'Alternar para modo escuro');
    }

    darkModeToggle.addEventListener('click', () => {
        // Toggle the class on the root <html> element
        document.documentElement.classList.toggle('dark-mode');

        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        
        // Save preference to localStorage and update button
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.textContent = '☀️';
            darkModeToggle.setAttribute('aria-label', 'Alternar para modo claro');
        } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.textContent = '🌙';
            darkModeToggle.setAttribute('aria-label', 'Alternar para modo escuro');
        }
    });
  }
});