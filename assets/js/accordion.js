'use strict';

$(function () {
  const $acTitle = $('.accordion__title');

  $acTitle.on('click', function (e) {
    e.preventDefault();
    $(this)
      .toggleClass('open')
      .next('.accordion__desc')
      .toggleClass('open');
  });
});
