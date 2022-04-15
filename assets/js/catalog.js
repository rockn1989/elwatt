'use strict';

$(function () {
	/*______ Catalog Scrollbar ______*/

	if($('.filter').length) {
		$('.filter .group-list').not('.no-scrollbar').mCustomScrollbar({
			axis: "y",
			theme: "siteTheme",
			scrollInertia: 300
		});
	}

	/*______ Catalog toggle group-list ______*/

	$('.js__group-title-toggle').on('click', function() {
		var _self = $(this),
			$parent = _self.closest('fieldset');
		if(_self.hasClass('open-title')) {
			_self.removeClass('open-title');
			$parent.find('.group-list').stop(true, true).slideUp(0, function () {
        $parent.removeClass('open');
      });
      
		} else {
			_self.addClass('open-title');
			$parent.addClass('open').find('.group-list').stop(true, true).slideDown(0);
		}

	});


  /**
   * UI Slider
   */

  $("#ui-slider").slider({
    range: true,
    min: 0,
    max: 60000,
    step: 1,
    values: [1000, 60000],
    create: function (event, ui) {
      var val = $("#ui-slider").slider("values");
      var min = $("#ui-slider").slider("option", "min");
      var max = $("#ui-slider").slider("option", "max");
      var minPricePosition = $(".ui-slider-handle").eq(0).css("left");
      var maxPricePosition = $(".ui-slider-handle").eq(1).css("left");
      $(".ui-slider-min").css("left", minPricePosition);
      $(".ui-slider-max").css("left", maxPricePosition);

      $(".ui-slider-current-value span").html(val[1]);

      $(".ui-slider-box .price-input-min").val(val[0]);
      $(".ui-slider-box .price-input-max").val(val[1]);

      $(".js__ui-slider").on("change keyup", function (e) {
        var inputValue = parseInt($(this).val(), 10);

        var minValue = 0;
        var maxValue = 0;

        if ($(this).hasClass("price-input-min")) {
          minValue = parseInt($(this).val(), 10);
          $("#ui-slider").slider("values", 0, minValue);
        }

        if ($(this).hasClass("price-input-max")) {
          maxValue = parseInt($(this).val(), 10);
          $("#ui-slider").slider("values", 1, maxValue);
        }

        if (inputValue > max) {
          $(".ui-slider-box .price-input-max").val(max);
          $("#ui-slider").slider("value", inputValue);
        } else if (inputValue < min) {
          $(".ui-slider-box .price-input-min").val(min);
          $("#ui-slider").slider("value", inputValue);
        }
      });
    },
    slide: function (event, ui) {
      var maxPricePosition = $(".ui-slider-handle").eq(1).css("left");
      $(".ui-slider-max").css("left", maxPricePosition);
      $(".ui-slider-box .price-input-min").val(ui.values[0]);
      $(".ui-slider-box .price-input-max").val(ui.values[1]);
    },
  });

  $("#ui-slider").draggable();

});
