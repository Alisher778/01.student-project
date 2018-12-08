
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
    for(var i=0; i<inputs.length; i++) {
        if(inputs[i].nodeName === "INPUT" && !inputs[i].value) {
          goNext = false;
        }
    }
    if(goNext) {
        pre.style.display = 'none';
        nextel.style.display = 'flex';
    }
}


// If password section is tyrue go to message.html page'

function goMessage() {
    var myPassword = document.getElementById('myPassword').value;
    var repeatMyPassword = document.getElementById('repeatMyPassword').value;
    var nextel = document.getElementById('next');

    if(myPassword && repeatMyPassword) {
        if(myPassword === repeatMyPassword) {
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



