$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});

$(window).scroll(function () {
  if($(this).scrollTop() >= 100) {
    $('.navbar').addClass('grow');
    $('.nav-logo').addClass('grow');
  } else {
    $('.navbar').removeClass('grow');
    $('.nav-logo').removeClass('grow');
  }
});

$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});

$("#year").text(new Date().getFullYear());