/* ========================================
   JUMAO
   MAIN JAVASCRIPT
======================================== */


/* ========================================
   MOBILE MENU
======================================== */

const menuButton =
    document.querySelector(".menu-button");

const navMenu =
    document.querySelector(".nav-menu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* ========================================
   CLOSE MENU AFTER CLICK
======================================== */

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ========================================
   SIMPLE SCROLL EFFECT
======================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(10, 10, 10, 0.75)";

    } else {

        navbar.style.background =
            "rgba(255, 255, 255, 0.06)";

    }

});


/* ========================================
   YEAR
======================================== */

console.log(
    "JUMAO • Alight Motion Creative Hub"
);
