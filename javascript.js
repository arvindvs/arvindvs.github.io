$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('menu').addClass('changeColor')
      }
      if ($(this).scrollTop() < 100) {
         $('menu').removeClass('changeColor')
      }
   });
});