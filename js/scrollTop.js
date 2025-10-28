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

// Tap feedback for mobile
toTopBtn.addEventListener('touchstart', () => {
  toTopBtn.style.transform = "scale(1.1)";
  toTopBtn.style.backgroundColor = "#aeff46";
  toTopBtn.style.color = "#0d0d0d";
  toTopBtn.style.boxShadow = "0 0 15px #aeff46, 0 0 30px #aeff46";

  // reset back after 200ms
  setTimeout(() => {
    toTopBtn.style.transform = "";
    toTopBtn.style.backgroundColor = "#0d0d0d";
    toTopBtn.style.color = "#aeff46";
    toTopBtn.style.boxShadow = "0 0 8px #aeff46, 0 0 18px #aeff46";
  }, 200);
});
