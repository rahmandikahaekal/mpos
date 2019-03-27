$(document).ready(function () {
    $('.owl-home').owlCarousel({
        touchDrag: false,
        mouseDrag: false,
        margin: 10,
        loop: true,
        drag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });

    $('.owl-one').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
            items: 1
            },
            600: {
            items: 2
            },
            1000: {
            items: 2
            }
        }
    });

    $('.owl-brand').owlCarousel({
        loop:true,
        margin: 30,
        autoplay: false,
        dots: false,
        responsive : {
            0: {
                items: 2
            },
            425: {
                items: 3
            },
            768: {
                items: 4
            },
            800: {
                items: 5
            }
        }
    })

    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // Product Slide
    $('.owl-product').owlCarousel({
        margin: 10,
        loop: true,
        animateOut: 'SlideOut',
        animateIn: 'SlideIn',
        items:1,
    })

    $('.owl-side').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'SlideOut',
        animateIn: 'SlideIn',
        items:1,
    })
})

$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

$(function () {
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300,
        animation: 'fade',
        animationInSpeed: 200,
        animationOutSpeed: 200,
        activeOverlay: false,
    })
})