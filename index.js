 //declare variable MenuItems which take ul having id "MenuItems"
        
 var MenuItems = document.getElementById("MenuItems");
 MenuItems.style.maxHeight = "0px";//by default, we have set menu or dropdown menu height to 0px, means it is close by default
 
 function menutoggle()//this is the function which we have called above in nav which works on small devices and users click on it
 {
     if (MenuItems.style.maxHeight =="0px")//when user click on it and if it is closed or its height is 0px, then it will open or it should have heigt of 200px upon clicking
     {
         MenuItems.style.maxHeight = "200px"
     }
     else//if user not clicked or it has already opened, then it will upon clicking again closed
     {
         MenuItems.style.maxHeight = "0px" 
     }
 
 }
 const slideshowImages = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showSlide(n) {
  // Reset all images
  slideshowImages.forEach(img => img.classList.remove('active'));
  
  // Show the desired slide
  slideshowImages[n].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideshowImages.length;
  showSlide(currentSlide);
}

// Automatically change slides every 3 seconds
setInterval(nextSlide, 3000);

// Show the initial slide
showSlide(currentSlide);
