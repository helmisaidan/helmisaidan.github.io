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

// Close
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("lightbox-video").pause();
}

// Simpan semua media
let gallerySources = [];
document.querySelectorAll(".gallery-item img, .gallery-item video").forEach(media => {
  gallerySources.push(media.getAttribute("src"));
});

let currentIndex = 0;

// Update display
function showMedia(index) {
  currentIndex = index; // set index sekali sahaja

  let src = gallerySources[index];
  
  if (src.endsWith(".mp4")) {
    displayVideo(src);
  } else {
    displayImage(src);
  }
}

// Display image (tidak set currentIndex lagi)
function displayImage(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-img").style.display = "block";
  document.getElementById("lightbox-video").style.display = "none";
}

// Display video (tidak set currentIndex lagi)
function displayVideo(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-video").src = src;
  document.getElementById("lightbox-video").style.display = "block";
  document.getElementById("lightbox-img").style.display = "none";
}

// Next & Prev
document.getElementById("nextBtn").onclick = (e) => {
  e.stopPropagation();
  showMedia((currentIndex + 1) % gallerySources.length);
};

document.getElementById("prevBtn").onclick = (e) => {
  e.stopPropagation();
  showMedia((currentIndex - 1 + gallerySources.length) % gallerySources.length);
};

// Caption list
// Data caption ikut nama file
let captions = {
  "land1.jpg": "Otw Malinja",
  "land2.jpg": "Pusat Islam",
  "land3.jpg": "Bukit H",
  "land4.jpg": "Malinja A",
  "land5.jpg": "Pusat Islam",
  "land6.jpg": "Otw home (Jalan AS)",
  "land7.jpg": "Gunung Perlis",
  "land8.jpg": "Bukit H", 
  "land9.jpg": "Bukit Kodiang",
  "land10.jpg": "Bukit Telipong",
  "land11.jpg": "Malinja A",
  "land12.jpg": "Malinja A",
  "land13.jpg": "PB, UiTM",
  "land14.jpg": "UiTM",
  "land15.jpg": "Pokok depan DP",
  "land16.jpg": "Malinja A",
  "land17.jpg": "Home",
  "land18.jpg": "Home",
  "land19.jpg": "Home",
  "land20.jpg": "Otw intern (Masih di Kg)",
  "land21.jpg": "Otw intern (Masih di Kg)",
  "land22.jpg": "Home",
  "food1.jpg": "Habanero Chicken Strips",
  "food2.jpg": "Pisang Goreng Cheese",
  "intern1.jpg": "Intern MDPT Day 1",
  "intern2.jpg": "Intern MDPT Day 1",
  "Bukit H - 1st Time.mp4": "First hiking, Bukit H!",
  "Bukit H - 2nd Time.mp4": "Bukit H 2nd round", 
  "Bukit Telipong.mp4": "Bukit Telipong" 
};

// Function ambil nama file
function getFileName(path) {
  return path.split('/').pop();
}

// Auto inject icon + caption
document.querySelectorAll('.gallery-item img, .gallery-item video').forEach(media => {
  let parent = media.parentElement; // .gallery-item atau .video-thumb
  let file = getFileName(media.getAttribute('src'));
  let capText = captions[file] || "No caption";

  // Create icon
  let icon = document.createElement('div');
  icon.classList.add('info-icon');
  icon.innerText = "ℹ️";
  icon.onclick = function(e) {
    toggleCaption(this);
  };

  // Create caption
  let cap = document.createElement('div');
  cap.classList.add('info-caption');
  cap.innerText = capText;

  // Append
  parent.appendChild(icon);
  parent.appendChild(cap);
});
function toggleCaption(el) {
  let cap = el.parentElement.querySelector('.info-caption');
  if (cap.style.display === "block") {
    cap.style.display = "none";
  } else {
    cap.style.display = "block";
  }
  event.stopPropagation();
}


