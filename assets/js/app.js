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
  })

});
