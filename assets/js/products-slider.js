'use strict';

$(function () {
  const $productSlider = $('.products-slider .slider');
  
  $productSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (slick.slideCount <= 4) {
      $(this).addClass('small-slider');
    }
  });


  $productSlider.slick({
      arrows: true,
      dots: false,
      infinite: true,
      fade: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: false,
      responsive: [
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 3
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1
          },
        },
      ],
  });
});
