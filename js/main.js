(function($) {
	'use strict'

	$('.down-slider').hide();

	$('.headb-dropdown button i').on('click',function(){
		$('.head-slider').addClass('animate__fadeOutDown');
		$('.head-slider').fadeOut();
		$('.down-slider').show();
		$('.down-slider').addClass('animate__fadeInDown');
	});

	$('.slide-back').on('click',function(){
		$('.down-slider').removeClass('animate__fadeInDown');
		$('.down-slider').fadeOut();
		$('.head-slider').removeClass('animate__fadeOutDown');
		$('.head-slider').fadeIn();
		$('.head-slider').addClass('animate__fadeInDown');
	});

	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animate__animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null,    // optional scroll container selector, otherwise use window,
	    resetAnimation: true,     // reset animation on end (default is true)
	  }
	);
	wow.init();



}) (jQuery)