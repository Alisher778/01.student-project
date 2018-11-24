var str = 'hello world';


var arr=[];
for(var i=str.length-1; i>=0; i--) {
  arr.push(str[i])
}

var arr=[];
for(var i=0; i<str.length; i++) {
  arr.unshift(str[i])
}