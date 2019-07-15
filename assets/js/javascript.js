$("#navbar a[href^='#']").on('click', function(event) {
  var target = this.hash;

  event.preventDefault();

  var navOffset = $('#navbar').height();

  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top - navOffset
  }, 2000, function() {
    return window.history.pushState(null, null, target);
  });
});