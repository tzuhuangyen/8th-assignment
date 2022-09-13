$(function () {
  console.log("Hello Bootstrap5");
});

//click 搜尋按鈕 search icon then h1& menu icon d-none then show search form
$(document).ready(function () {
  $(".search-icon").click(function (event) {
    $("h1").toggle();
    $(".navbar-toggler-icon").toggle();
    $(".searchForm").toggle();
  });
});

// click 左側（返回）按鈕icon
$(document).ready(function () {
  $(".fa-angle-left").click(function (event) {
    $("h1").toggle();
    $(".navbar-toggler-icon").toggle();
    $(".searchForm").toggle();
  });
});

//click 選單 icon then menu icon d-none & show close icon
$(document).ready(function () {
  $(".navbar-toggler-icon").click(function (event) {
    $(".navbar-toggler-icon").toggle();
    $(".close-icon").toggle();
  });
});

// click 關閉選單按鈕close-icon then show menu icon
$(document).ready(function () {
  $(".close-icon").click(function (event) {
    $(".navbar-toggler-icon").toggle();
    $(".close-icon").toggle();
  });
});

// artist swiper
// <!-- Initialize Swiper -->

var swiper = new Swiper(".artistSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,

  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
  },
});
