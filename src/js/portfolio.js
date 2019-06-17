$('.portfolio__slider').slick({
  dots: true,
  mobileFirst: true,
  centerMode: true,
  infinite: false,
  arrows: false,
  speed: 300,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: 'portfolio__dots',
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

$('.portfolio__head').slick({
  speed: 300,
  infinite: false,
  arrows: true,
  touchMove: false,
  swipe: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev arrow arrow--prev portfolio__arrow portfolio__arrow--prev">' +
    '<span class="visually-hidden">prev button</span>' +
    '<svg xmlns="http://www.w3.org/2000/svg" class="arrow__icon arrow__icon--prev" width="15" viewBox="0 0 492 492"><path class="arrow__path" xmlns="http://www.w3.org/2000/svg" fill="#6e6a71" d="M464.344 207.418l.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"/></svg>' +
    '</button>',
  nextArrow: '<button type="button" class="slick-next arrow arrow--next portfolio__arrow portfolio__arrow--next">' +
    '<span class="visually-hidden">next button</span>' +
    '<svg xmlns="http://www.w3.org/2000/svg" class="arrow__icon arrow__icon--next" width="15" viewBox="0 0 492 492"><path class="arrow__path" xmlns="http://www.w3.org/2000/svg" fill="#6e6a71" d="M464.344 207.418l.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"/></svg>' +
    '</button>',
});

$('.scrollbar-rail').scrollbar();
