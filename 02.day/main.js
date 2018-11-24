// Funkshin declaration
function sayHelloToUtkir() {
    console.log('Salom O\'tkir')
}
sayHelloToUtkir();

// function expression
var say = function() {
    console.log('Salom O\'tkir')
}
say();
var k = say;
k();


function sayTo(name) {
    console.log('Say hi to', name);
}
sayTo('Alisher');
sayTo('Sam');
sayTo('Tim');

try {
	if(admin) {
		console.log('Welcome admin')
	}
} catch(error) {
	console.log('No admin');
    throw error.message
} finally {
	console.log('Juda ko\'p urunding uka')
}

