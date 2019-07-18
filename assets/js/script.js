// Icon 
$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});

// Navbar grow
$(window).scroll(function () {
  if($(this).scrollTop() >= 100) {
    $('.navbar').addClass('grow');
    $('.nav-logo').addClass('grow');
  } else {
    $('.navbar').removeClass('grow');
    $('.nav-logo').removeClass('grow');
  }
});

// Navbar effect 
$(document).ready(function (){
  if($('.navbar-toggler').click( function (){
    $(this).parent().toggleClass("navbar-expand-md");
  })); 
});

// Carousel
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

//  Year
$("#year").text(new Date().getFullYear());

// Archive gallery
$(function() {
  var selectedClass = "";
  
  $(".filter").click(function(){
  
    selectedClass = $(this).attr("data-rel");
  
  $("#gallery").fadeTo(100, 0.1);
  
  $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
  
  setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    }, 300);
  });

});

// Scrollspy
$('body').scrollspy({ target: '#navbar-scroll' });

// Lightbox
$(document).on('click', '[data-toggle="lightbox"]', '[data-gallary="gallary"]', function(event) {
  event.preventDefault();
  return $(this).ekkoLightbox({
      wrapping: false,
      onShown: function() {
          if (window.console) {
              return console.log('Checking our the events huh?');
          }
      },
      onNavigate: function(direction, itemIndex) {
          if (window.console) {
              return console.log('Navigating '+direction+'. Current item: '+itemIndex);
          }
      }
  });
});

