
var navbar = document.querySelector('.classNavMenu');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    navbar.classList.add('transparent');
  } else {
    navbar.classList.remove('transparent');
  }
});
