var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  var captions = document.getElementsByClassName("slide-caption");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    captions[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  captions[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var error = document.getElementById("error-message");

  if (!name || !email || !message) {
    error.textContent = "Please fill out all fields.";
    return;
  }

  // Perform further processing or form submission here

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  error.textContent = ""; // Clear any previous error message
});

// Responsive modifications
window.addEventListener("resize", function() {
  showSlides(); // Re-run the showSlides function on window resize
});
