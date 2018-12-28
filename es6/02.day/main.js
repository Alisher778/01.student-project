const HI = 'Hello';
console.log(`${HI} World!`);

// Obj Constructor(Zavod)
function  User(name={}, group="9A") {
   this.name = name;
   this.group = group; 
}
var user1 = new User('Hello');
var user2 = new User('Hello 2', 608);
console.log(user1);
console.log(user2);
const User2 = (name, group) => {
   console.log(this)
}
// User2();
// var name = 'hohoh'
// var obj = {
//     name: 'Hello',
//     callUser: () => {
//         console.log('Hi', this.name);
//     },
//     callUser2() {
//         console.log('Hi function', this.name);
//         var self = this;
//        function j() {
//            var self2 = self;
//             console.log('hahahhahah', self.name)
//         }
//         j()
//     }
// }

// console.log(obj.callUser())
// console.log(obj.callUser2())

function puzzle(...words) {
    console.log( words)
    // var userAnswer = prompt('What is the biggest animal');
    // for(var i=0; i<words.length; i++) {
    //     console.log(i)
    //     if(words[i] == userAnswer) {
    //         return alert('Hoorrry', i)
    //     }
    // }
    
    // console.log(word1 === word2);
}
puzzle('Hello', 'hello', 'bye', 'world');

function cars(name, price, color) {
    console.log(name, price, color)
}
cars('dhasghjjf', 'afdfsa')

function cars() {
    console.log(arguments)
}
cars('dhasghjjf', 'afdfsa', 'fdas', function(){return 2*3})