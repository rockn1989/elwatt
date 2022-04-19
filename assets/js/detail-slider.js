'use strict';

$(function () {
  $('.detail-slider .slider').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false
        }
      }
    ]
  });
});
