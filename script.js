const navMenuBtn = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mobileMenu');
const leftBx = document.querySelector('.mainBanner .leftBx');
const rightBx = document.querySelector('.mainBanner .rightBx');

let isMenuOpen = false;
navMenuBtn.addEventListener('click', () => {
    if(!isMenuOpen){
        navMenuBtn.classList.remove('fa-bars');
        navMenuBtn.classList.add('fa-xmark');
        mobileMenu.style.right = "0";
    }else{
        navMenuBtn.classList.add('fa-bars');
        navMenuBtn.classList.remove('fa-xmark');
        mobileMenu.style.right = "-100%";
    }
    isMenuOpen = !isMenuOpen;
});

// document.addEventListener("DOMContentLoaded", () => {
  
//     // Function to animate the divs
//     function animateDivs() {
//         console.log("called");
//       leftBx.style.transform = "translateX(0)";
//       rightBx.style.transform = "translateX(0)";
//     }
  
//     // Trigger the animation when the page is fully loaded and reloaded
//     animateDivs();
  
//     // Reset the animation when the page is reloaded
//     window.addEventListener("unload", () => {
//       leftBx.style.transform = "translateX(-100px)";
//       rightBx.style.transform = "translateX(100px)";
//     });
//   });
  