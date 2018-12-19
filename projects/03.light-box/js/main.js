$(document).ready(function() {

    $('#gal img').click(function() {
        var myImg = $(this).attr('src');
        var myImgId = $(this).attr('id');
        $('#modal img').attr({'src': myImg, id: myImgId});
        $('#modal').css('display', 'flex')
    });

    $('#close').click(function() {
        $('#modal').fadeOut('fast')
    });


    $('#modal button').click(function() {
        var btnId = $(this).attr('id');
        var getImg = $('#modal img').attr('id');
        if(btnId == 'prev') {
            var prevImg = $('#'+getImg).prev().attr('src');
            var prevImgId = $('#'+getImg).prev().attr('id');
            if(prevImg) {
                $('#modal img').attr({src: prevImg, id: prevImgId});
            } else {
                var lastImg = $('#gal img').last();
                $('#modal img').attr({src: lastImg.attr('src'), id: lastImg.attr('id')});
            }
        } else {
            var nextImg = $('#'+getImg).next().attr('src');
            var nextImgId = $('#'+getImg).next().attr('id');
            if(nextImg) {
                $('#modal img').attr({src: nextImg, id: nextImgId});
            } else {
                var firstImg = $('#gal img').first();
                $('#modal img').attr({src: firstImg.attr('src'), id: firstImg.attr('id')});
            }
        }

    });

    // $('#gal img').hover(function() {
    //     var myImg = $(this).attr('src');
    //     var myImgId = $(this).attr('id');
    //     function ho() {
            
    //          $('#modal img').attr({'src': myImg, id: myImgId});
    //         $('#modal').css('display', 'flex')
    //     }
        
    //     setTimeout(ho, 400);
        
    // });

});