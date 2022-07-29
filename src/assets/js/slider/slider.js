import Swiper, { Navigation, Pagination } from 'swiper';

function slider() {
  new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      el: '.slider .swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    navigation: {
      nextEl: '.slider .swiper-button-next',
      prevEl: '.slider .swiper-button-prev'
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
}
slider();