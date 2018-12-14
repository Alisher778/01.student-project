//document.querySelector('h1');
$(document).ready(function() {
   $('h1').click(function() {
        // $(this).addClass('red').addClass('btn').removeClass('red');
        $(this).toggleClass('btn');
        var fontSize = $(this).css('font-size');
        $(this).css('font-size', parseInt(fontSize) * 2+'px');
   });
   var index = 1;
   $('button').click(function() {
        var px = window.innerWidth*index;
        if(index == 4) {
            index = 0;
            $('#first').css('margin-right', 0); 
        } else {
            $('#first').css('margin-right', -px);
            index++;
        }
   });

   $('button').mousemove(function(e) {
       var ofset = $( this ).offset();
       var position = $( this ).scrollTop();
       console.log(position)
       
   })

   $(document).scroll(function(e) {
        var top = $(this).scrollLeft();
        console.log(top)
        if(top > $('button').position().top - 150) {
            console.log('trigered')
            $('<h1>Salom</h1>').insertAfter('button')
        }
   })




});