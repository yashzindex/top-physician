
$(document).ready(function () {
  // Menu Button
  let menu = $("#menu-toggle");
  let navMenu = $("#nav-menu");

  // Toggle menu on hamburger click
  menu.click(function () {
    $(this).toggleClass("open");
    $(navMenu).toggleClass("leftZero");

    // Toggle body overflow
    if ($(navMenu).hasClass("leftZero")) {
      $("body").css("overflow", "hidden"); // prevent scrolling
    } else {
      $("body").css("overflow", ""); // reset to default
    }
  });

  // Close menu when a nav link is clicked
  $("#nav-menu a").click(function () {
    menu.removeClass("open"); // reset hamburger state
    navMenu.removeClass("leftZero"); // hide nav
    $("body").css("overflow", ""); // allow scrolling again
  });
});
