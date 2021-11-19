const burgerMenu = document.querySelector('.burger-menu'),
overlay = document.querySelector('.navigation__mob')
body = document.querySelector('body');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  body.classList.toggle('overflow');
});