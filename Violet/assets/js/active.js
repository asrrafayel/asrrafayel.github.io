(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		$('.homePageSlider').owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            loop: true,
        });
        
		$('.myMenSlide').owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            loops: true,
        });
        
         $('.allPortfolios').mixItUp();
        
        var pMli = $('.portfolioMenu li');
        
       
		//mixitup-menu
        pMli.on('click', function () {

            pMli.removeClass("active");
            $(this).addClass("active");
        }); 
        
        var hAH = $('.headerArea').height();
        $('.welcomeText').height(hAH);
        $('.portfolioMenu li').addClass('singleBtn');
        
        
        
        //cout up 
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 8000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });



            });
	});
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);
