
(function($){
	$(function(){


        if ($('.venture-item-wrap').length) {
            $('.venture-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
                focusOnSelect: false,

            });
            $(window).on('resize', function () {
                $('.venture-item-wrap').slick('resize');

            });
        }
        
        
        if ($('.talent-item-wrap').length) {
            $('.talent-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: false,
                responsive: [

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            swipe: true,
                        }
                    }

                ]
            });
            $(window).on('resize', function () {
                $('.talent-item-wrap').slick('resize');

            });
        }
        
        $(".faq-accordion-item").each(function(){
            
            var $this = $(this);
            $this.find(" > h5").on("click touch", function(){
                $(".faq-accordion-item").removeClass("accordion-active")
                $(".accordion-item-content").slideUp();
                if($this.find(".accordion-item-content:visible").length){
                    $(".faq-accordion-item").removeClass("accordion-active")
                    $(".accordion-item-content").slideUp();
                }
                else{
                    $this.addClass("accordion-active")
                    $(".accordion-item-content").slideUp();
                    $this.find(" > .accordion-item-content").slideDown();
                }
            })
        })
        
        
//        $('.btn.purple-btn').click(function () {
//            $(".modal-wrap").fadeIn()
//        });
//        
//        $('body').click(function () {
//            $(".modal-wrap").fadeOut()
//        });
        
        
        $('.btn.purple-btn').click(function (e) {
            e.preventDefault()
            $('body').addClass('modal-show')
            player.play();
        })
        $('.modal-wrap').click(function () {
            $('body').removeClass('modal-show')
            player.pause();
        })
        
        
		
	})// End ready function.
   
    
    
    
    

	

})(jQuery)

