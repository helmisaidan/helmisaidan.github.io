// Neon hamburger toggle
const toggleBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggleBtn.classList.toggle("active");
});

// If screen resized up to desktop, always show nav & reset icon
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    nav.classList.remove("open");
    toggleBtn.classList.remove("active");
  }
});
