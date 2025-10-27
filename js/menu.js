const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
