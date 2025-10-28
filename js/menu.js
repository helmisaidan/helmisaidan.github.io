document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");
    menuToggle.classList.toggle("active", isOpen);

    // Disable background scrolling when menu is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  });
});
