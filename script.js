$(document).ready(function () {
  var header = $(".header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      header.addClass("fix");
    } else {
      header.removeClass("fix");
    }
  });
});
