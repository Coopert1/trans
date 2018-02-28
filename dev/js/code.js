$(function(){
	StateMarginHeaderInfo();
	StateMarginPic();
	StateMarginSection02();
	FooterLinksTogle();
		function StateMarginHeaderInfo() {
			var browserMinWidth = $(window).width()
			if (browserMinWidth > 800) {
				var height = $('.header-pic').height()
				var difference = 388-height
				bottom = 388-difference
				$('.header-info').css({"bottom":bottom, "margin-bottom": -bottom})
			}
		}
		function StateMarginPic() {
			var browserMinWidth = $(window).width()
				if (browserMinWidth > 800) {
					$('.block_girl').css('height', $('.girl').height());
				}
				else {
					$('.ma-top').css("margin-top",0)
					$('.block_girl').css('height', 200);
				}
		}
		function StateMarginSection02() {
			var browserMinWidth = $(window).width()
			if (browserMinWidth > 800) {
				var height = $('.girl').height();
				var difference = 459-height,
				bottom = 459-difference;
					$('.section02').css({"bottom":bottom, "margin-bottom": -bottom})
			}
			else {
				$('.section02').css({"bottom":0, "margin-bottom": 0})
			}
		}
	$(window).resize(function(){
		StateMarginHeaderInfo();
		StateMarginPic();
		StateMarginSection02();
		var browserMinWidth = $(window).width()
			
			if(browserMinWidth < 600){
			
			FooterLinksTogle();
		}

	})
	function FooterLinksTogle() {
		var browserMinWidth = $(window).width()
		if(browserMinWidth < 600){
			$('.footer ul').click(function(){
				console.log("h");
				
				if( $(this).children().is(':hidden') ){
					$(this).children().slideDown(500)
					$(this).addClass('active')
				}else{
					$(this).children().slideUp(500)
					$(this).removeClass('active')
				}
			});
		}
		else{
			$(this).children().show();
			$('.footer ul').onclick=null;
		}
	}

});