const swiper = new Swiper('.swiper', {

    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,


    breakpoints: {
    
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
    }
  },

    pagination: {  //кнопки переходу на наступ картки
    el: '.swiper-pagination',
    bulletClass: 'pagination__button', //який клас буде застосовув до кнопки
    bulletActiveClass: 'pagination__button--active',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },

});