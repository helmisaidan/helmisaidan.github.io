// === Mobile Menu Toggle ===
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

menuIcon.addEventListener("click", () => {
  if (isMobile()) {
    navLinks.classList.toggle("show-menu");
    menuIcon.classList.toggle("active");
  }
});

window.addEventListener("resize", () => {
  if (!isMobile()) {
    navLinks.classList.remove("show-menu");
    menuIcon.classList.remove("active");
  }
});
