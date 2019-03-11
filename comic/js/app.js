;(function($){
	console.log('aaaa');
	$('.header .mob_menu a').on('click', function(event){
		event.preventDefault();
		$('.header .mob_menu a').toggleClass('active');
		$('.header .navigation').toggleClass('active').slideToggle();
	});
	
	  $('.gallary.slider').slick({
	  	  dots: true,
		  infinite: false,
		  arrows: false,
		  speed: 300,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  appendDots:'.dots-nav',
		  responsive: [
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
		  ]
	   });
	    $(function() {
	        $('.lazy').lazy();
	    });
	
	$('.contact-form .form-inner .form-control').on('input',function(event){

		if($(event.target).val()===''){

			$(event.target).siblings('.label').removeClass('show');
		}else{

		$(event.target).siblings('.label').addClass('show');
		}
	});
})(jQuery);