$(document).ready(function() {
    // $('#data').load('../test.html #h1');


    // $.get('https://jsonplaceholder.typicode.com/users', function(data) {
    //     console.log(data)
    // });
    // //req = request
    // //res = response
    // $.post('https://jsonplaceholder.typicode.com/users', {user: 1}, function(data) {
    //     console.log(data)
    // });
    $('form').submit(function(e) {
        e.preventDefault();

        var inputs = $(this).children().filter('input');
        var user = {};
        for(var i=0; i<inputs.length; i++) {
            user[inputs[i].name] = inputs[i].value;
        }
     
        $.post('https://jsonplaceholder.typicode.com/users', user, function(data) {
        console.log(data)    
        for(var i in data) {
                var input = '<p>'+ data[i] +'</p>'
                // $('#data').html($('#data').html() + input) 
                $('#data').append(input);
                
            }
        });
    });

});