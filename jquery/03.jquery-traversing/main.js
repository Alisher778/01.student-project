$(document).ready(function() {

    $('.next').click(function() {
        $(this).parent().css('display', 'none');
        $(this).parent().next().css('display', 'block');
    });

    $('.prev').click(function() {
        $(this).parent().css('display', 'none');
        $(this).parent().prev().css('display', 'block');
    });

    // Ona elementlarni tanlash uchun
    var parent = $('a').parent(); // o'z ona elementtini tanlash uchun
    var parents = $('a').parents(); // htmlgacha bo'lgan ona elementlarni tanlash uchun
    var parentsUntil = $('a').parentsUntil('body'); // berilgan ona elementlargacha tanlash uchun

    // $('button').click(function() {
    //     var id = $(this).attr('id');
    //     if(id == 'par') {
    //         parent.css('background', '#eee');
    //     } else if(id == 'pars') {
    //         parents.css({border: '2px solid'})
    //     } else {
    //         parentsUntil.css({background: 'brown'})
    //     }
    // });

    $('ul').click(function() {
        console.log($(this).children());
        $(this).find('a').css('text-decoration', 'none');
    });

    $('li').click(function(e) {
        console.log(e)
        e.preventDefault();
        $(this).siblings().css('color', 'red')
        $(this).next().css('color', 'green');
    });

    $('*').click(function(){
        var g = $(this);
        console.log(g.is('hr'));
    })



});