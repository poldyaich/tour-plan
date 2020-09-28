var hotelslider = new Swiper(".hotel-slider", {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider_button--next",
    prevEl: ".hotel-slider_button--prev",
  },

  effect: "coverflow",
  speed: 1700,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider_button--next",
    prevEl: ".reviews-slider_button--prev",
  },

  speed: 1700,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
