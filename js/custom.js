// var topbar = document.querySelector(".topbar");

// window.addEventListener("scroll", function () {
//   if (window.scrollY === 0) {
//     topbar.style.display = "block"; // Show the topbar when scroll position is at the top
//   } else {
//     topbar.style.display = "none"; // Hide the topbar after the first scroll
//   }
// });

// var topbar = document.querySelector(".topbar");
//   var hasScrolled = false;

//   window.addEventListener("scroll", function () {
//     if (!hasScrolled) {
//       topbar.style.display = "block"; // Show the topbar when scroll is 0 (start of the page)
//       hasScrolled = true;
//     }

//     if (window.scrollY > 1) {
//       topbar.style.display = "none"; // Hide the topbar after the first scroll
//     }
//   });




// JavaScript to hide the topbar on the first scroll
let scrolled = false;
window.addEventListener('scroll', () => {
    if (!scrolled) {
        // Hide the topbar and add a class to indicate it's been scrolled
        document.getElementById('topbar').style.opacity = '0';
        document.body.classList.add('scrolled');
        scrolled = true;
    }
});
