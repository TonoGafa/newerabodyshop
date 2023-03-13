
var navbar = document.querySelector('.classNavMenu');
/*
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    navbar.classList.add('transparent');
  } else {
    navbar.classList.remove('transparent');
  }
}); */


window.addEventListener('scroll', function() {
  var contenedor = document.querySelector('.classNavMenu');
  var scrollPosition = window.scrollY;
  
  if (scrollPosition > 0) {
    contenedor.classList.add('transparency');
  } else {
    contenedor.classList.remove('transparency');
  }
});
