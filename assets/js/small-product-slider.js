'use strict';

$(function () {
  $('.small-product-slider .slider').slick({
      arrows: true,
      dots: false,
      infinite: false,
      fade: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: false,
      variableWidth: true
  });
});
