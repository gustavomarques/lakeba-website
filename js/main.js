

// ------------------------------------------------
// General Scripts
// ------------------------------------------------

if (screen.width < 1030) {
	$("body > section").waypoint(function() {
		$(this).toggleClass("active");
	}, { offset: 800 });
}
else {
	$("body > section").waypoint(function() {
		$(this).toggleClass("active");
	}, { offset: 500 });
}




$(document).ready(function() {

	$('#nav > li:has(ul)').addClass('submenu');

	// grab the initial top offset of the navigation 
	var stickyNavTop = $('#navWrapper').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			 
		// if we've scrolled more than the navigation, change its position to fixed to stick to top,
		// otherwise change it back to relative
		if (scrollTop > stickyNavTop) { 
			$('#navWrapper').addClass('sticky');
		} else {
			$('#navWrapper').removeClass('sticky'); 
		}
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

	
});

var $btnMobile = $('#navMobileButton');

$btnMobile.click(function(){
	$('#nav').toggleClass('show');
	$('#navMobileButton').toggleClass('active');
})


// ------------------------------------------------
// Home page carrousel
// ------------------------------------------------

function moveToSelected(element) {

	if (element == "next") {
		var selected = $(".selected").next();
	} else if (element == "prev") {
		var selected = $(".selected").prev();
	} else {
		var selected = element;
	}

	var next = $(selected).next();
	var prev = $(selected).prev();
	var prevSecond = $(prev).prev();
	var nextSecond = $(next).next();

	$(selected).removeClass().addClass("selected");

	$(prev).removeClass().addClass("prev");
	$(next).removeClass().addClass("next");

	$(nextSecond).removeClass().addClass("nextRightSecond");
	$(prevSecond).removeClass().addClass("prevLeftSecond");

	$(nextSecond).nextAll().removeClass().addClass('hideRight');
	$(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Keyboard events
$(document).keydown(function(e) {
	switch(e.which) {
		case 37: // left
		moveToSelected('prev');
		break;

		case 39: // right
		moveToSelected('next');
		break;

		default: return;
	}
	e.preventDefault();
});


$('#shortcutsLinks > main > div').click(function() {
	moveToSelected($(this));
});

$('#shortcutsLinks #prev').click(function() {
	moveToSelected('prev');
});

$('#shortcutsLinks #next').click(function() {
	moveToSelected('next');
});




// ------------------------------------------------
// Testimonials carrousel
// ------------------------------------------------

$('#testimonialsWrapper > section').slick({
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	fade: true,
	cssEase: 'linear',
	prevArrow: '#testimonialsNav #prev',
	nextArrow: '#testimonialsNav #next',
	adaptiveHeight: true
});







