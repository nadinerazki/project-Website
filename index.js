var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight === "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

const slideshowImages = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showSlide(n) {
  slideshowImages.forEach(img => img.classList.remove('active'));
  slideshowImages[n].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideshowImages.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

function adjustSlides() {
  var windowWidth = window.innerWidth;
  
  if (windowWidth < 768) {
    // Perform responsive adjustments for slideshow
    slideshowImages.forEach(img => img.style.width = "100%");
  } else {
    // Reset adjustments for larger screens
    slideshowImages.forEach(img => img.style.width = "");
  }
}

window.addEventListener("resize", adjustSlides);

// Show the initial slide
showSlide(currentSlide);

// Adjust slides on initial load
adjustSlides();
