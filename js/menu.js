// js/menu.js - Mobile menu toggle (safe)
(function() {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector("header nav");

  if (!menuIcon || !navLinks) return; // nothing to do if missing

  // helper to check mobile media
  function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
  }

  // Toggle only when on mobile
  menuIcon.addEventListener("click", function() {
    if (!isMobile()) return;
    navLinks.classList.toggle("show-menu");
    menuIcon.classList.toggle("active");
  });

  // If user resizes to desktop: make sure menu is closed and icon reset
  window.addEventListener("resize", function() {
    if (!isMobile()) {
      navLinks.classList.remove("show-menu");
      menuIcon.classList.remove("active");
    }
  });
})();
