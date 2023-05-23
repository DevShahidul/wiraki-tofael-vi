
(function($){
	$(function(){

        // Preloader function scripts
        $(window).on('beforeunload', function(){
            $(window).scrollTop(0);
        });

        function getElementEndPos(el) {
            var rect = el[0].getBoundingClientRect();
            return rect.top + rect.height;
          }
          function getElementHeight(el){
            var rect = el[0].getBoundingClientRect();
            return rect.height;
          }

        function convertToPercent (elementHeight, scrolledVal){
            let calculatedValue = elementHeight / 100;
            return scrolledVal / calculatedValue
        }

        
        function reduceInset(percent, el){
            let inset = 100 - percent;
            if(inset < 0) {
                el.find('.filling_item').css({
                    clipPath: 'inset(0% 0 0)'
                });
            }else{
                el.find('.filling_item').css({
                    clipPath: 'inset('+inset+'% 0 0)'
                });
            }
          }

          function filling(element, scrollingLayer){
            let elEndPos = getElementEndPos(element);
                let elHeight = getElementHeight(element);

              if(scrollingLayer.top <= elEndPos){
                let elScrolled = elEndPos - scrollingLayer.top;
                let percent = convertToPercent(elHeight, elScrolled);
                reduceInset(percent, element)
                element.find('.filling_item_down').css({
                    clipPath: 'inset(100% 0 0)'
                })
              }
              if( scrollingLayer.top > elEndPos){  // Reset the clip path to 100%
                element.find('.filling_item').css({
                    clipPath: 'inset(100% 0 0)'
                });
                element.find('.filling_item_down').css({
                    clipPath: 'inset(0% 0 0)'
                })
              }
              if(scrollingLayer.top == 0){
               var timing = setTimeout(function(){
                   if($(".pre-loader-main").attr("style") !== "display: none;"){
                       $(window).scrollTop(0);
                        $(".pre-loader-main").hide();
                    }
                    $(".main-wrap").css({
                        height: "auto"
                    })
                    $(".main-wrap").animate({
                        opacity: 1,
                    }, 500);
                }, 700)
              }
          }


        $(window).on('scroll resize', function() {
            var scrollingLayer = document.getElementById("black-overlay").getBoundingClientRect();
        
            $(".box-card").each(function() {
                let _this = $(this);
                filling(_this, scrollingLayer);
            });
            $(".innter-text").each(function(){
                $this = $(this);
                filling($this, scrollingLayer);
            });
          });

        //   End peloader functionality

        

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

            }).on('init', function(event, slick){
                console.log("initialised")
                $('.venture-item-wrap').slick()
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

