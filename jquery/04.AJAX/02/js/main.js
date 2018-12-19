$(document).ready(function() {
    
    
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        // type: 'post',
        // data: {name: 'Alisher'},
        success: function(data) {
            for(var i=0; i< data.length; i++) {
                var u = data[i];
                var user = '<li><b>Username:</b> '+ u.name +', <b>Eamil:</b> '+ u.email +', <b>Company:</b> '+ u.company.name +'</li>'
                $('#user').append(user)
            }
        }, error: function(err) {
            console.log(err);
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();
        var form = $(this).serialize();
        var user = {};
        for(var i=0; i<form.length; i++) {
            user[form[i].name] = form[i].value
        }
        // var user = {name: $('input[name=name]').val(), email: $('input[name=email]').val(), company: $('input[name=company]').val()}
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            type: 'post',
            data: form,
            success: function(data) {
                var u = data;
                var user = '<li><b>Username:</b> '+ u.name +', <b>Eamil:</b> '+ u.email +', <b>Company:</b> '+ u.company +'</li>'
                $('#user').append(user);
                $('input').val('');
            }, error: function(err) {
                console.log(err);
            }
        })

    });





});