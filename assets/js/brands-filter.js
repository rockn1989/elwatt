'use strict';

$(function () {
  const $brandsName = $('[filter-control]'),
        $brands = $('[data-name]');

  let $brandsSelected = [];

  function updateFilter(letter) {
    
    if (letter === 'reset') {
      $brandsSelected = [];
      return;
    }

    const letterExists = $brandsSelected.indexOf(letter);

    if (letterExists === -1) {
      return $brandsSelected.push(letter);
    }
    
    $brandsSelected = $brandsSelected.filter(function (el, _idx)  {
      return el !== letter;
    });

    return $brandsSelected;
  }

  $brandsName.on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('active');

    const value = $(this).attr('filter-control');

    updateFilter(value);

    $brands.each(function (_, el)  {
      if ($brandsSelected.length === 0) {

        $brandsName.removeClass('active');
        $(el).removeClass('uk-hidden');

        return;
      }

      if (!$brandsSelected.includes($(el).attr('data-name'))) {
        $(el).addClass('uk-hidden');
      } else {
        $(el).removeClass('uk-hidden');
      }
      
    });
  });

});
