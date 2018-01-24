$(function(){
	$(window).resize(function() {
	var height = $('.header-pic').height()
	console.log(height)
	var difference = 388-height
	bottom = 388-difference
	$('.header-info').css("bottom",bottom)
	})
});
