$('.testimonials__slider').slick({
  dots: false,
  mobileFirst: true,
  centerMode: true,
  infinite: false,
  arrows: false,
  speed: 300,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 589,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1199,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});
