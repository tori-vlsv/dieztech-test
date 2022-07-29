import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function mobileMenu() {
  let button = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__menu');
  button.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      enablePageScroll();
    } else {
      this.classList.add('active');
      disablePageScroll();
    }
    menu.classList.toggle('active');
  });
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      button.classList.remove('active');
      enablePageScroll();
      menu.classList.remove('active');
    }
};
}
mobileMenu();