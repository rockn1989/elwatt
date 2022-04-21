'use strict';

$(function () {
  
  const $newSlider = $('.news-slider .slider');

  $newSlider.slick({
    slidesToShow: 3,
    centerPadding: 20,
    autoplay: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});
