$(function(){


$('.service__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:"<button class='slick-prev slick-arrow a-prev'><div class='arrow-next--img'></button>",
    prevArrow:"<button class='slick-next slick-arrow a-next'><div class='arrow-prev--img'></button>",
});

$('.testimonials__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  nextArrow:"<button class='slick-prev slick-arrow a-prev'><div class='arrow-next--img'></button>",
  prevArrow:"<button class='slick-next slick-arrow a-next'><div class='arrow-prev--img'></button>",
});

})