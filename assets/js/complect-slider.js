'use strict';

$(function () {
  const $complectSlider = $('.complect-slider .slider');
  
  $complectSlider.on('init reInit afterChange', function (_event, slick, _currentSlide, _nextSlide) {
    if (slick.slideCount <= 4) {
      $(this).addClass('small-slider');
    }
  });


  $complectSlider.slick({
      arrows: true,
      dots: false,
      infinite: true,
      fade: false,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
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
