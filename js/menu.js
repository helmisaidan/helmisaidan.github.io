// === Mobile Menu Toggle ===
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");
  menuIcon.classList.toggle("active");
});
