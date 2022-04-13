'use strict';

$(function () {

  const $heroSlider = $('.hero-slider');

    $heroSlider.slick({
      arrows: true,
      dots: true,
      infinity: true,
      fade: true,
      cssEase: "linear",
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="btn-slide slick-prev"></div>',
      nextArrow: '<div class="btn-slide slick-next"></div>',
      responsive: [
        {
          breakpoint: 960,
          settings: {
            arrows: false,
          },
        },
      ],
    });

});
