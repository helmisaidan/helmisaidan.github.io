// Filter kategori
function filterGallery(category) {
  let items = document.querySelectorAll('.gallery-item');
  let buttons = document.querySelectorAll('.tab-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Lightbox Image
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-img").style.display = "block";
  document.getElementById("lightbox-video").style.display = "none";
}

// Lightbox Video
function openVideoLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-video").src = src;
  document.getElementById("lightbox-video").style.display = "block";
  document.getElementById("lightbox-img").style.display = "none";
}

/* PLAY ICON OVER VIDEO THUMBNAIL */
.video-thumb {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-thumb video {
  pointer-events: none; /* Prevent video auto playing when clicking */
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: white;
  opacity: 0.85;
  pointer-events: none;
}

// Close
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("lightbox-video").pause();
}

