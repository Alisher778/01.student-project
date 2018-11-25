var myId = document.getElementById('myId');
console.log(myId);
var className = document.getElementsByClassName('clName');
console.log(className[0]);
var p = document.getElementsByTagName('p');
console.log(p);
var p2 = document.querySelector('p');
console.log(p2);
var pDiv = document.querySelectorAll('div> p');
console.log(pDiv);

var email = document.querySelector('input[type=email]');
console.log(email);
// var btn = document.getElementsByTagName('button')[0].onclick = function() {
    console.log('Hey You man');
//}
var button = document.getElementsByTagName('button');
// button.addEventListener('dblclick', function() {
//     console.log('I am event listenetr');
// });
// console.log(button)
var i=0;
for(; i<button.length; i++) {
    button[i].onclick = function(txt) {
        console.log(this.innerHTML);
    }
};
