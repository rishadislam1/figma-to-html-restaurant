window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show fixed navbar after scrolling 40px
  if (window.scrollY > 40) { 
      navbar.classList.add("navbar-fixed");
  } else {
      navbar.classList.remove("navbar-fixed");
  }

  // Show "Scroll to Top" button after scrolling 100px
  if (window.scrollY > 100) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
});

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
