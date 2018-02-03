var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('menu').outerHeight();

var didScroll;

// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});

// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();
	if (Math.abs(lastScrollTop—st) <= delta) return;
	if (st > lastScrollTop && st > navbarHeight){
		$('menu').removeClass('nav-down').addClass('nav-up');
	} else {
		if(st + $(window).height() < $(document).height()) {
			$('menu').removeClass('nav-up').addClass('nav-down');
		}
	}
	lastScrollTop = st;
}