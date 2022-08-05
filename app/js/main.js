$(function(){

  $('.menu__link').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top}, 1000);
  });

  $('.header-top__bars-btn, .menu__link').on('click', function(e){
    e.preventDefault();
/*     $('.menu').toggleClass('menu--active'); */
    if ($('.menu').hasClass('menu--active')) {
      $('.menu').removeClass('animate__fadeIn').addClass('animate__fadeOut');
      setTimeout(function() {
        $('.menu').toggleClass('menu--active');
      }, 1000);
/*       .delay(7000).toggleClass('menu--active'); */
    /*   $('.menu').addClass('animate__fadeIn'); */
    } else {
      $('.menu').toggleClass('menu--active');
      $('.menu').removeClass('animate__fadeOut').addClass('animate__fadeIn');
    /*   setTimeout(function() {
        $('.menu').toggleClass('menu--active');
      }, 1000); */
     /*  .delay(7000).toggleClass('menu--active'); */
/*       $('.menu').removeClass('animate__fadeIn');
      $('.menu').addClass('animate__fadeOut'); */
    }
    /* if($('.menu').classList.contains('menu--active')) {
      $('.menu').toggleClass('animate__fadeOutRight');
    } */
  });

  let bars = document.querySelector('.header-top__bars-btn');
  let menu = document.querySelector('.menu');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
          bars.classList.add("header-top__bars-btn--active");
      } else {
          bars.classList.remove("header-top__bars-btn--active");
          menu.classList.remove("menu--active");
      }
  });

  new WOW().init();

});
  

