// Preloader 
jQuery(function (jQuery) {
    //Preloader
    var preloader = jQuery('.preloader');
    jQuery(window).load(function () {
        preloader.remove();
    });
});
// Wow 
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
})
wow.init();
// Bootstrap Slider 
jQuery('.carousel').carousel({
    interval: 20000
});
/**** owl carousel ****/
jQuery(document).ready(function () {
    var owl = jQuery("#owl-demo");
    owl.owlCarousel({
        itemsCustom: [
                [767, 2]
                , [992, 2]
                , [1200, 2]
                , [1500, 2]]
        , navigation: false
        , pagination: true
        , slideSpeed: 1000
        , scrollPerPage: true
    });
});
jQuery(function () {
    var filterList = {
        init: function () {
            // MixItUp plugin
            // http://mixitup.io
            jQuery('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio'
                    , filter: '.filter'
                }
                , load: {
                    filter: '.holiday-park'
                }
            });
        }
    };
    // Run the show!
    filterList.init();
    jQuery(document).ready(function() {
	jQuery(".fancybox").fancybox({
		openEffect	: 'none',
          scrolling   : 'no',
		closeEffect	: 'none'
	});
});
});
/**** Custom Scroll *****/
(function ($) {
    $(window).on("load", function () {
        $(".accomo_lft,.capability_cntnt p , .attraction_innr_lft").mCustomScrollbar({
            theme: "minimal-dark"
        });
    });
})(jQuery);
/**** Flexslider ****/
jQuery(window).load(function () {
    // The slider being synced must be initialized first
    jQuery('#carousel').flexslider({
        animation: "slide"
        , controlNav: false
        , animationLoop: true
        , slideshow: false
        , itemWidth: 145
        , itemMargin:37
        , asNavFor: '#slider'
    });
    jQuery('#slider').flexslider({
        animation: "slide"
        , controlNav: false
        , animationLoop: false
        , slideshow: false
        , sync: "#carousel"
    });
});

/**** Fancy box ****/

jQuery(document).ready(function() {
		jQuery(".fancybox").fancybox({
            openEffect	: 'none',
		closeEffect	: 'none'
        })
	});
