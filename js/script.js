const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // Tukar ikon bila menu buka/tutup
  if (navMenu.classList.contains("show")) {
    menuIcon.innerHTML = "&times;";
  } else {
    menuIcon.innerHTML = "&#9776;";
  }
});
