$(document).ready(function() {

    // document.getElementById('btn');
    // document.querySelector('#btn');

    $('#hide').click(function() {
        // $('h1').toggle(2000);
        // $('h1').fadeOut(2000);
        // $('h1').fadeToggle(2000);
        // $('h1').slideUp(800);
        $('#myDiv').stop()
    });
    $('#show').click(function() {
        // $('h1').show('slow');
        // $('h1').fadeIn(2000);
        // $('h1').fadeTo(2000,0.3);
        // $('h1').slideDown(800);

        $('#myDiv').animate({height: '120px', width: '100%', background: 'green'}, 2000, function() {
            console.log('finished')
        })
    });
    
 













});