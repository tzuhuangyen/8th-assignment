$(function () {
  console.log("Hello Bootstrap5");
});

//click search icon then h1& menu icon d-none then show search form
$(document).ready(function () {
  $(".search-icon").click(function (event) {
    $("h1").toggle();
    $(".navbar-toggler-icon").toggle();
    $(".searchForm").toggle();
  });
});

//click menu icon then menu icon d-none & show close icon
$(document).ready(function () {
  $(".navbar-toggler-icon").click(function (event) {
    $(".navbar-toggler-icon").toggle();
    $(".close-icon").toggle();
  });
});

// click close-icon then show menu icon
$(document).ready(function () {
  $(".close-icon").click(function (event) {
    $(".navbar-toggler-icon").toggle();
    $(".close-icon").toggle();
  });
});
