$(document).ready(function () {
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