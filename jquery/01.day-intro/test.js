var btn = document.getElementById('hide');
var index =0;
btn.addEventListener('click', function() {
    index++;
    document.getElementById('result').innerHTML += '<p onclick="hey(this)">Alisher'+index+'</p>'
});
function hey(event) {
    console.log(event)
}