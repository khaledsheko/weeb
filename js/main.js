var swiper = new Swiper(".dessertSwiper", {
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".ratesSwiper", {
  spaceBetween: 30,
  freeMode: true,
  slidesPerView: "auto",
  grabCursor: true,
});
var swiper = new Swiper(".blogsSwiper", {
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});