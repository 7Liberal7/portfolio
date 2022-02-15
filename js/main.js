$(function () {
  $(".menu a, .logo, .header__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });

  $('.menu__btn').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.menu__link').on('click', function () {
    $('.menu').removeClass('menu--active');
    $('.menu__btn').removeClass('menu__btn--active');
  });

  setInterval(time, 10);

  function time() {
    const windowScrollTop = window.pageYOffset;
    if (windowScrollTop > 30) {
      document.querySelector('.header__navigation').style.backgroundColor = '#7792E0';
    } else {
      document.querySelector('.header__navigation').style.backgroundColor = 'transparent';
    }
  }

  var mixer = mixitup('.gallery__list');

});