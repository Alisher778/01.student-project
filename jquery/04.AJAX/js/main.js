$(document).ready(function() {
    console.time()
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        async: false,
        type: "POST",
        data: {hello: 'man'},
        success: function(data) {
            console.log(data);
        }, error: function(err) {
            console.log(err)
        }
    });
    console.timeEnd();
    
    
      async function h() {
        console.time()
           await fetch('https://jsonplaceholder.typicode.com/users', {async: false})
                .then(function(data) {
                    return data.json();
                })
                .then(function(res) {
                    console.log(res)
                })
                .catch(function(err) {
                    console.log(err)
                })
                    
            console.timeEnd()
                
        }
        
        h()

    
    
        
});