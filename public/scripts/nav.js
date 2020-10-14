const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");


function toggleMenu() {
    if (menu.classList.contains("active")){
        menu.classList.remove("active");
        // add hamburger icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        menu.classList.add("active");
        //  add close (X) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
    } 
}

toggle.addEventListener("click", toggleMenu, false);


// Add dropdown functionality

const items = document.querySelectorAll(".item"); // returns a node list rather than a single element
 
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    //   first remove active class everywhere
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    // add active class after removing everywhere
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

// Note that in the else if block, we remove the class from every other menu items that were previously opened. This way, it won’t happen that two submenus are open at the same time, as they can cover each other on desktop.
 
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);
   
    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
   
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);