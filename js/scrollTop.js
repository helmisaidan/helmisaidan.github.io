// ===== MOVE TO TOP BUTTON =====
const toTopBtn = document.getElementById("toTopBtn");

// Show button when user scrolls down 100px
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});

// Scroll to top smoothly when button clicked
toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
