var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight === "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

var ProductImg = document.getElementById("product-img");
var SmallImg = document.getElementsByClassName("small-img");

function displayLargeImage(index) {
  ProductImg.src = SmallImg[index].src;
}

for (var i = 0; i < SmallImg.length; i++) {
  SmallImg[i].onclick = function(index) {
    return function() {
      displayLargeImage(index);
    };
  }(i);
}

function adjustImages() {
  var windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    // Perform responsive adjustments for small images
    for (var i = 0; i < SmallImg.length; i++) {
      SmallImg[i].style.width = "25%";
    }
  } else {
    // Reset adjustments for larger screens
    for (var i = 0; i < SmallImg.length; i++) {
      SmallImg[i].style.width = "";
    }
  }
}

window.addEventListener("resize", adjustImages);

// Adjust images on initial load
adjustImages();
