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
    });
})