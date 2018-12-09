
var forms = document.querySelector('form');
forms.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Good to go!');
    false;
});

// If all inputs are not empty open next (password) section
function callNext() {
    var pre = document.getElementById('pre');
    var nextel = document.getElementById('next');
    var inputs = pre.children;
    var goNext = true;
    var obj = {};
    for(var i=0; i<inputs.length; i++) {
        if(inputs[i].nodeName === "INPUT" && !inputs[i].value) {
          goNext = false;
        } else {
            if(inputs[i].nodeName === "INPUT") {
                obj[inputs[i].name] = inputs[i].value;
            }
        }
    }
    

    if(goNext) {
        pre.style.display = 'none';
        nextel.style.display = 'flex';
        localStorage.newUser = JSON.stringify(obj);
    }
}


// If password section is tyrue go to message.html page'

function goMessage() {
    var myPassword = document.getElementById('myPassword').value;
    var repeatMyPassword = document.getElementById('repeatMyPassword').value;
    var nextel = document.getElementById('next');

    if(myPassword && repeatMyPassword) {
        if(myPassword === repeatMyPassword) {
            if(!localStorage.data) localStorage.data = "[]";
            // Get data from localstorage and parse it into javascript object
            var localStorageData = JSON.parse(localStorage.data);
            var getNewUser = JSON.parse(localStorage.newUser);

            // Create a new user
            var newData = Object.assign(getNewUser, {id: localStorageData.length+1 || 1, password: myPassword, createdAt: Date.now()});

            // Store it back into localstorage
            localStorageData.push(newData);
            localStorage.data = JSON.stringify(localStorageData);
            
            // make newuser from localstorage empty
            localStorage.newUser = "";
            
            document.getElementById('repeatMyPassword').style.cssText = 'border: 2px solid; color: initial';
            setTimeout(function() {
                location.href = '/message.html'
            }, 1000)
        } else {
            document.getElementById('repeatMyPassword').style.cssText = 'border: 2px solid red; color: red'
        }
    } else {
        console.log('qayerga shoshepsan?')
    }

}



