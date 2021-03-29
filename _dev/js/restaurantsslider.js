var $ = require("jquery");

$(document).ready(function () {
  var $slider = $(".slider"),
    diff = 0,
    curSlide = 0,
    numOfSlides = $(".slide").length - 1,
    autoSlideTimeout,
    autoSlideDelay = 6000,
    $pagination = $(".slider-pagi");

  function createBullets() {
    for (var i = 0; i < numOfSlides + 1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-" + i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  }

  createBullets();

  function autoSlide() {
    autoSlideTimeout = setTimeout(function () {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  }

  autoSlide();

  function changeSlides(instant) {
    $(".slide").removeClass("active");
    $(".slide-" + curSlide).addClass("active");
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-" + curSlide).addClass("active");
    diff = 0;
    autoSlide();
  }
});
