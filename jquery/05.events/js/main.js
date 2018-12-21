$(document).ready(function() {

    $('button').on('click mouseenter', function(e) {
        console.log(e.type)
        $('#res').html('Hey')
        $(this).off('click'); //removing click evenet from the button
    });

    // $('input').keydown(function(e) {
    //     console.log(e.target)
    //     console.log('Down', e.which, e.key);
    // })
    // $('input').keyup(function() {
    //     console.log('Up')
    // });
    // $('input').keypress(function() {
    //     console.log('Press')
    // });
    // $('input').on('focus blur change',function(e) {
    //     console.log(e.type)
    // })
    $('input').on('keypress',function(e) {
        $('div p').html(e.target.value)
    });
    $('select').change(function(e) {
        console.log(e.target)
    })

    // $(document).mousemove(function(e) {
    //     console.log(e.pageX, e.pageY)
    // });
    $('div').click(function() {
        console.log(1)
    });
    $('div p').click(function(e) {
        e.stopPropagation();
        console.log(2);
    });


});