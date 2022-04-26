$(function () {

	UIkit.util.on($('.dropdown-menu'), 'beforeshow', function() {
    $("body").addClass("menu-open");
    const $hitSlider = $('.hit-slider .slider');
    $hitSlider.slick('unslick');
 
  });

	UIkit.util.on($('.dropdown-menu'), 'show', function() {
      const $hitSlider = $('.hit-slider .slider');
      $hitSlider.slick({
        infinity: true,
      });
  });  

  UIkit.util.on($(".dropdown-menu"), "hide", function () {
    $("body").removeClass("menu-open");
    $('.main-nav .subnav').removeClass('visible');
  });

  UIkit.util.on('#offcanvas-menu-mob', 'show', function () {
      $("body").addClass("menu-open");
  });

  UIkit.util.on('#offcanvas-menu-mob', 'hide', function () {
      $('.js__toggle-icon').removeClass("active");
      $("body").removeClass("menu-open");
  });

  $(".js__toggle-icon").on("click", function (e) {
    e.preventDefault();

    if ($('#offcanvas-menu-mob').hasClass('uk-open')) {
      $(this).addClass("active");
    }
    
  });

	/*______ Category Nav Links Hover ______*/

	let subnav = $('.main-nav .subnav'), 
		idx, 
		parentBlock;

	$('.main-subnav').on('mouseenter', 'li', function () {

		idx = $('.main-subnav li').index($(this));

		parentBlock = $(this).parents($('.dropdown-menu__inner'));
    subnav.siblings('ul').removeClass('visible');
		parentBlock.find($('.subnav').eq(idx)).addClass('visible');

	});

  /**
   * Mobile search form
   */
  var $mobileForm = $(".mobile-search-form");

  $(".js__toggle-mobile-search").on("click", function (e) {
    e.preventDefault();
    $mobileForm.slideToggle("350").find("input").focus();
  });


  /**
   * Mobile nav
   */

  $(".js__mobile-list-toggle").on("click", function (e) {
    e.preventDefault();
    $(this)
      .toggleClass("open")
      .parent("*")
      .siblings("ul")
      .stop(true, true)
      .slideToggle("350");
  });


  /**
   * Show hidden list
   */

  $('.js__show-list').on('click', function (e) {
    e.preventDefault();
    $(this).parent('*').find('ul').toggleClass('show');
    $(this).text($(this).text() === 'Показать еще' ? 'Скрыть' : 'Показать еще');
  });

  /**
   * Toggle left sidebar
   */

  $('.js__toggle-sidebar').on('click', function (e) {
    e.preventDefault();
    $('.left-sidebar__inner').stop(true, true).slideToggle('350')
    $(this).toggleClass('open');
  });


  /**
   * Forms focus input
   */

  $(".default-form input, .default-form textarea").on("focus", function (e) {
    e.preventDefault();
    $(this).siblings('label:not([class="error"])').addClass('focus');
    $(this).addClass('focus');
  });

 $('.default-form input, .default-form textarea').on('blur', function() {
    if($(this).val().length <= 1) {
      $(this).siblings('label').removeClass('focus');
      $(this).removeClass('focus');
    }
  });

  /**
   * Custom select
   */

  $.each($(".js__select2"), function (i, el) {
    $(el).select2({
      placeholder: $(el).data("placeholder"),
      theme: $(el).data("theme"),
      width: $(el).data("width"),
      allowClear: true,
      minimumResultsForSearch: -1,
      dropdownPosition: "below",
    });
  });

	/*______ Catalog Scrollbar ______*/

	if($('.comparison-list__inner').length) {
		$('.comparison-list__inner').mCustomScrollbar({
			axis: "x",
			theme: "siteTheme",
			scrollInertia: 300,
      advanced:{ 
        autoExpandHorizontalScroll:true,
        updateOnContentResize: true 
      }
		});
	}


  $('.delete-item').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.product-card').parent().remove();
  });


  /**
   * Input tel mask
   */

  $(".js__input-mask")
    .mask("+7 999 999-99-99", { clearIfNotMatch: true })
    .focus(function (e) {
      if (!$(this).val()) {
        $(this).val("+7 ");
      }
    });


  /**
   * File events
   */
  $('.js__order-form-file').on('change', function() {
    $('.custom-file-name-box span').text($(this).val());
    $('.delete-file').toggleClass('uk-hidden');
  });

  $('.delete-file').on('click', function() {
    $('.js__order-form-file').val('');
    $('.custom-file-name-box span').text('');
    $(this).toggleClass('uk-hidden');
  });



  /**
   * Attention block
   */

  $('.js__hidden-attention').on('click', function (e) {
    e.preventDefault();
    $(this).parent('.attention-bar').slideUp();
  });

});
