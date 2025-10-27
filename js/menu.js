function toggleMenu() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
