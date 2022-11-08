/*
  Theme Name: Shakib - Creative One Page Portfolio
  Author: Shakib Hosen Sabbir
  Description: Shakib - Creative One Page Portfolio
  Version: 1.0
*/

(function ($) {
    "use strict";



    // Section Scroll Nav
    $('.menu').onePageNav({
        currentClass: 'scroll_nav',
        changeHash: false,
        scrollSpeed: 100,
        scrollThreshold: 0.1,
        easing: 'swing',
    });



    const typed = new Typed('.typed__text', {

        strings: ['Shakib Hosen', ' Web Desinger', ' Web Developer', 'WordPress Expert', ],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1500,
        loop: true,
    });

    //Counter js
    $('.count').counterUp({
        delay: 10,
        time: 3000
    });

    // Sticky Header 
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
            $(".header__sticky").removeClass("sticky");
        } else {
            $(".header__sticky").addClass("sticky");
        }
    });


    // Background Image
    $("[data-background]").each(function () {

        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

 // owlCarousel
 $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
       0: {
          items: 1,
       },
       767: {
          items: 2,
       },
       992: {
          items: 1
       }
    }
 })
  // Clients Section 
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    autoplay: {
     delay: 1000,
     disablOnInteraction:false,
},
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// Contact From 
jQuery(".contact__form #send__message").on('click', function(){
		
    var name 		= jQuery(".contact__form #name").val();
    var email 		= jQuery(".contact__form #email").val();
    var message 	= jQuery(".contact__form #message").val();
    var subject 	= jQuery(".contact__form #number").val();
    var success     = jQuery(".contact__form .returnmessage").data('success');

    jQuery(".contact__form .returnmessage").empty(); //To empty previous error/success message.
    //checking for blank fields	
    if(name===''||email===''||message===''){
       jQuery('#name').css('border-color','#e34f4f')
       jQuery('#email').css('border-color','#e34f4f')
       jQuery('#number').css('border-color','#e34f4f')
       jQuery('#message').css('border-color','#e34f4f')
        jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
    }
    else{
        // Returns successful data submission message when the entered information is stored in database.
        jQuery.post("contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
            
            jQuery(".contact__form .returnmessage").append(data);//Append returned message to message paragraph
            
            
            if(jQuery(".contact__form .returnmessage span.contact_error").length){
                jQuery(".contact__form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
            }else{
                jQuery(".contact__form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
                jQuery(".contact__form .returnmessage").slideDown(500).delay(4000).slideUp(500);
            }
            
            if(data===""){
                jQuery("#contact__form")[0].reset();//To reset form fields on success
            }
            
        });
    }
    return false; 
});




  // Portfolio Sectoin 

        jQuery(document).ready(function( $ ) {

            var $grid = $('.portfolio__active').isotope({
                itemSelector: '.gid-item',
                layoutMode: 'fitRows'
            });
            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
                },
                // show if name ends with -ium
                ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
                }
            };
            // bind filter button click
            $('.porfolio__menu').on( 'click', 'button', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });
            

            $('.porfolio__menu button').on('click',function(event){
                $(this).siblings('active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            //Portfolio Button Active
            $(document).ready(function() {
            $(".tabs").click(function () {
                $(".tabs").removeClass("active");
                $(this).addClass("active");   
            });
            });
        });

    //Images Hover Scrolling
    $( window ).on( 'load', function(){
        $( '.screen' ).scrollImage();
    })

    // ASO Animation 
    AOS.init({
        duration:800,
    });

  
})(jQuery);