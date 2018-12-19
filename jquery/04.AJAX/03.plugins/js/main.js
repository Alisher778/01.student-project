$(document).ready(function() {
    $('#gal').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true
    });

    $('#drag h1').draggable()



});