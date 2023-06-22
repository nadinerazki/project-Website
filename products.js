var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight === "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

function adjustMenu() {
  var windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    // Perform responsive adjustments for the menu
    MenuItems.style.maxHeight = "0px";
  } else {
    // Reset adjustments for larger screens
    MenuItems.style.maxHeight = "";
  }
}

window.addEventListener("resize", adjustMenu);

// Adjust menu on initial load
adjustMenu();
