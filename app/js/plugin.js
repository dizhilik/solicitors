;(function ($) {
	var moreOptionBtn = $('.more-option');
	var secondForm = $('.second-form');

	moreOptionBtn.on('click', function (){
		secondForm.slideToggle();
		moreOptionBtn.toggleClass('open');
	});
	//init fromstayler
	 $('select').styler();
	 //init slick slider
	 $('.areas-slick-js').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
	});
})(jQuery);