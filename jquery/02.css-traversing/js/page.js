$(document).ready(function() {

   $(document).scroll(function() {
       var scrollPosition = $(this).scrollTop();
    //    Make array of positions and choose which one is closer to the array item in the array list
    // [{name: 'about', pos: 400}];   
        var about = $('#about').offset().top;
        var service = $('#service').offset().top;
        var contact = $('#contact').offset().top;

        if(scrollPosition >= 60 && scrollPosition < about) {
           $('header').addClass('nice-nav');
        } else if(scrollPosition > about && scrollPosition < service) {
            $('nav li.active').removeClass('active');
            $('nav li[data-id=about]').addClass('active');
        } else if(scrollPosition > service && scrollPosition < contact) {
            $('nav li.active').removeClass('active');
            $('nav li[data-id=service]').addClass('active');
        } else if(scrollPosition > contact - 100) {
            $('nav li.active').removeClass('active');
            $('nav li[data-id=contact]').addClass('active');
        } else {
           $('header').removeClass('nice-nav');
           $('nav li.active').removeClass('active');
           $('nav li[data-id=home]').addClass('active');
       }

       if(scrollPosition > about - 400) {
           $('#go-top').fadeIn();
       } else {
            $('#go-top').fadeOut();
       }

   })

    // Onclick scroll page to the top
   $('#go-top').click(function(e) {
       $('body, html').animate({scrollTop: 0}, 800)
   })


});