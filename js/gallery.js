// =========================================================
// FILTER KATEGORI
// =========================================================
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

  updateGallerySources(category);
}



// =========================================================
// LIGHTBOX (IMAGE / VIDEO)
// =========================================================
function openLightbox(src) {
  currentIndex = gallerySources.indexOf(src);

  document.getElementById("lightbox").style.display = "flex";
  displayImage(src);
}

function openVideoLightbox(src) {
  currentIndex = gallerySources.indexOf(src);

  document.getElementById("lightbox").style.display = "flex";
  displayVideo(src);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("lightbox-video").pause();
}



// =========================================================
// BUILD GALLERY SOURCES + FIX VIDEO THUMBNAILS INDEX
// =========================================================
let gallerySources = [];
let currentIndex = 0;

function buildGallerySources() {
  gallerySources = [];

  let mediaList = document.querySelectorAll(".gallery-item img, .gallery-item video");

  mediaList.forEach((media, index) => {
    let src = media.src;
    gallerySources.push(src);

    // Klik dari parent (.gallery-item / .video-thumb) → dapat index betul
    media.parentElement.onclick = () => {
      currentIndex = index;

      if (src.endsWith(".mp4")) {
        openVideoLightbox(src);
      } else {
        openLightbox(src);
      }
    };
  });
}

// RUN sekali mula
buildGallerySources();



// =========================================================
// UPDATE SOURCES BILA TUKAR KATEGORI
// =========================================================
function updateGallerySources(category) {
  let selector = (category === "all")
    ? ".gallery-item img, .gallery-item video"
    : `.gallery-item.${category} img, .gallery-item.${category} video`;

  let mediaList = document.querySelectorAll(selector);

  gallerySources = [];
  mediaList.forEach(m => gallerySources.push(m.src));

  currentIndex = 0; // reset
}



// =========================================================
// SHOW MEDIA DALAM LIGHTBOX
// =========================================================
function showMedia(index) {
  currentIndex = index;

  let src = gallerySources[index];

  if (src.endsWith(".mp4")) {
    displayVideo(src);
  } else {
    displayImage(src);
  }
}



// =========================================================
// DISPLAY IMAGE
// =========================================================
function displayImage(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-img").style.display = "block";
  document.getElementById("lightbox-video").style.display = "none";
}



// =========================================================
// DISPLAY VIDEO
// =========================================================
function displayVideo(src) {
  document.getElementById("lightbox-video").src = src;
  document.getElementById("lightbox-video").style.display = "block";
  document.getElementById("lightbox-img").style.display = "none";
}



// =========================================================
// NEXT & PREV BUTTONS
// =========================================================
document.getElementById("nextBtn").onclick = (e) => {
  e.stopPropagation();
  let nextIndex = (currentIndex + 1) % gallerySources.length;
  showMedia(nextIndex);
};

document.getElementById("prevBtn").onclick = (e) => {
  e.stopPropagation();
  let prevIndex = (currentIndex - 1 + gallerySources.length) % gallerySources.length;
  showMedia(prevIndex);
};



// =========================================================
// CAPTIONS: DATA
// =========================================================
let captions = {
  "land1.jpg": "Omw to Malinja",
  "land2.jpg": "Pusat Islam",
  "land3.jpg": "Bukit H",
  "land4.jpg": "Malinja A",
  "land5.jpg": "Pusat Islam",
  "land6.jpg": "Heading Home (Jalan AS)",
  "land7.jpg": "Gunung Perlis",
  "land8.jpg": "Bukit H",
  "land9.jpg": "Bukit Kodiang",
  "land10.jpg": "Bukit Telipong",
  "land11.jpg": "Malinja A",
  "land12.jpg": "Malinja A",
  "land13.jpg": "Pondok Polis Bantuan",
  "land14.jpg": "UiTM",
  "land15.jpg": "Dewan Perdana",
  "land16.jpg": "Malinja A",
  "land17.jpg": "Home",
  "land18.jpg": "Home",
  "land19.jpg": "Home",
  "land20.jpg": "Omw to intern (still in my hometown)",
  "land21.jpg": "Omw to intern (still in my hometown)",
  "land22.jpg": "Home",

  "food1.jpg": "Spicy Honey Habanero Chicken Strips",
  "food2.jpg": "Pisang Goreng Cheese",

  "intern1.jpg": "MDPT – Front view",
  "intern2.jpg": "MDPT D1 Intern",
  "intern3.jpg": "Intern Task",
  "intern4.jpg": "MDPT Front ViewT",
  "intern5.jpg": "Inside the MDPT",
  "intern6.jpg": "Intern Task",
  "intern7.jpg": "Lunch break at Bangah Cafe",
  "intern8.jpg": "Bangah Cafe’s Menu",
  "intern9.jpg": "Bangah Cafe’s Menu",
  "intern10.jpg": "Outside MDPT",
  "intern11.jpg": "Motivation",
  "intern12.jpg": "A campaign by MDPT",
  "intern13.jpg": "A campaign by MDPT",
  "intern14.jpg": "Design",
  "intern15.jpg": "Printed out the design",
  "intern16.jpg": "Random selfie",
  "intern17.jpg": "Er..",
  "intern18.jpg": "Outside the MDPT",
  "intern19.jpg": "Farewell gift fr. 3 sisters 😭💖",
  "intern20.jpg": "Mirror selfie"

  "Bukit H - 1st Time.mp4": "First hiking, Bukit H!",
  "Bukit H - 2nd Time.mp4": "Bukit H 2nd round",
  "Bukit Telipong.mp4": "Bukit Telipong",
  "Gunung Perlis.mp4": "Gunung Perlis",
  "Bukit Kodiang.mp4": "Bukit Kodiang"
};



// =========================================================
// GET FILE NAME
// =========================================================
function getFileName(path) {
  return path.split('/').pop();
}



// =========================================================
// AUTO INJECT CAPTION + INFO ICON
// =========================================================
document.querySelectorAll('.gallery-item img, .gallery-item video').forEach(media => {
  let parent = media.parentElement;
  let file = getFileName(media.getAttribute('src'));
  let capText = captions[file] || "No caption";

  let icon = document.createElement('div');
  icon.classList.add('info-icon');
  icon.innerText = "ⓘ";
  icon.onclick = function(e) {
    toggleCaption(this);
    e.stopPropagation();
  };

  let cap = document.createElement('div');
  cap.classList.add('info-caption');
  cap.innerText = capText;

  parent.appendChild(icon);
  parent.appendChild(cap);
});

function toggleCaption(el) {
  let cap = el.parentElement.querySelector('.info-caption');
  cap.style.display = (cap.style.display === "block") ? "none" : "block";
}

