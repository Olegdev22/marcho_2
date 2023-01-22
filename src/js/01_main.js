$(function() {

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('.header__inner').addClass('sticky')
    } else {
      $('.header__inner').removeClass('sticky')
    }
  });

  let headerHeight = $('.header__inner').outerHeight();

  $('.menu__link').on('click', function(event) {

    event.preventDefault();

    let id = $(this).attr('href'),

      top = $(id).offset().top - headerHeight;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });



  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="img/sprite.svg#icon-angle-left" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="img/sprite.svg#icon-angle-right" /></svg></button>',
    infinite: false,
  });

  $(".star").rateYo({

    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg class="comments-form__star">' +
      '<use xlink:href="img/sprite.svg#icon-star-solid" />' +
      '</svg>'
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  // const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);




});

//line slider
$('.filter-price__input').ionRangeSlider({
  type: "double",
  prefix: "$",
  onStart: function(data) {
    $('.filter-price__from').text(data.from);
    $('.filter-price__to').text(data.to);
  },
  onChange: function(data) {
    $('.filter-price__from').text(data.from);
    $('.filter-price__to').text(data.to);
  }
});

//select filter
$('.select-style, .shop-product__num').styler();

//btn-filter
$('.shop-content__btn').on('click', function() {
  $('.shop-content__btn').removeClass('shop-content__btn--active');
  $(this).addClass('shop-content__btn--active');
});

$('.button-list').on('click', function() {
  $('.product-item').addClass('product-item--list');
});

$('.button-grid').on('click', function() {
  $('.product-item').removeClass('product-item--list');
});

//tabs
$('.tabs__top-link').on('click', function(e) {
  e.preventDefault();
  $('.tabs__top-link').removeClass('tabs__top-link--active');
  $(this).addClass('tabs__top-link--active');

  $('.tabs__content-item').removeClass('tabs__content-item--active');
  $($(this).attr('href')).addClass('tabs__content-item--active');
});