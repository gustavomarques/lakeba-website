$("body > section").waypoint(function() {
	$(this).toggleClass("active");
}, { offset: 600 });


$("#nav").waypoint(function() {
	$(this).toggleClass("active");
}, { offset: 70 });