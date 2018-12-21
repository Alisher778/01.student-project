// then  == success
// catch == error
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(data) {
       return data.json();
    })
    .then(function(res) {
        console.log(res)
    })
    .catch(function(err) {
        console.log(err);
    });
    