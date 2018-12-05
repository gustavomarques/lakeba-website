

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












