;(function ($) {
    var moreOptionBtn = $('.more-option');
    var secondForm = $('.second-form');

    moreOptionBtn.on('click', function () {
        secondForm.slideToggle();
        moreOptionBtn.toggleClass('open');
    });


	//init slicknav 
	$(function(){
		$('.header-nav').slicknav({
            label: '',
            prependTo: '.header .container',
        });
	});
	//init fromstayler
		$('select').styler();
	 //init slick slider
		 $('.areas-slick-js').slick({
			slidesToShow: 7,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
			responsive:[
				{
					 breakpoint: 1023,
					 settings:{
						slidesToShow: 4,
					}
				},
				{
					 breakpoint: 767,
					 settings:{
						slidesToShow: 2,
					}
				},
				{
					 breakpoint: 481,
					 settings:{
						slidesToShow: 1,
					}
				},
			]
		 });

})(jQuery);