const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function() {
  this.classList.toggle("change"); // animasi X
  navMenu.classList.toggle("show"); // buka/tutup menu
});
