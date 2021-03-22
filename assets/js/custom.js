/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */

const target = document.querySelector(".banner-full-height a");

target.addEventListener("click", function () {
  var elem = document.querySelector(".featured-products");
  window.scroll({
    top: elem.offsetTop,
    behavior: "smooth",
  });
});
