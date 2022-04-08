$(function () {

	UIkit.util.on($('.dropdown-menu'), 'beforeshow', function() {
    $("body").addClass("menu-open");
  });

  UIkit.util.on($(".dropdown-menu"), "hide", function () {
    $("body").removeClass("menu-open");
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

});
