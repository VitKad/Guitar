$(function(){

  $('.menu__link').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top}, 1000);
  });

  $('.header-top__bars-btn, .menu__link').on('click', function(e){
    e.preventDefault();
    if ($('.menu').hasClass('menu--active')) {
      $('.menu').removeClass('animate__fadeIn');
      $('.menu').addClass('animate__fadeOut');
  
      setTimeout(function() {
        $('.menu').removeClass('animate__fadeOut');
        $('.menu').removeClass('menu--active');
        
      }, 1000);

    } else {
      $('.menu').toggleClass('menu--active');
      $('.menu').removeClass('animate__fadeOut').addClass('animate__fadeIn');

   
    }

  });

  

  if (window.matchMedia('(min-width: 1000px)').matches) {

    




    let bars = document.querySelector('.header-top__bars-btn');
    let menu = document.querySelector('.menu');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
            bars.classList.add("header-top__bars-btn--active");
        } else {
            bars.classList.remove("header-top__bars-btn--active");
  /*           link.classList.remove("menu--active"); */
            menu.classList.remove("menu--active");
        }
    } 
    
    
    );
    /* let bars = document.querySelector('.header-top__bars-btn');
    window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
          bars.classList.add("header-top__bars-btn--active");
      }
   }); */
  } else {

/* 
    $('.header-top__bars-btn, .menu__link').on('click', function(e){
      e.preventDefault();
        $('.menu').toggleClass('menu--active');
    }); */

    $('.header-top__bars-btn').addClass("header-top__bars-btn--active");
  }

  new WOW().init();

});
  

