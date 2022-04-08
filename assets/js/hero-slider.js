'use strict';

(function () {

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
      prevArrow: '<div class="btn-slide slick-prev"><svg width="14px" height="12px" class="icon-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/icon-svg/sprite/sprite.svg#arrow-left"></use></svg></div>',
      nextArrow: '<div class="btn-slide slick-next"><svg width="14px" height="12px" class="icon-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/icon-svg/sprite/sprite.svg#arrow-right"></use></svg></div>',
      responsive: [
        {
          breakpoint: 960,
          settings: {
            arrows: false,
          },
        },
      ],
    });

})();
