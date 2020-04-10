let message: string = 'Hello World';
console.log(message);

function greetPerson(name) {
    let greet;
    if(name === 'Chandler') {
        greet = 'Hello Chandler';
    } else {
        greet = 'Hi there';
    }

    console.log(greet);
}

greetPerson("Chandler");


var a = 1;
var b = 2;
if(a === 1) {
    var a = 10;
    let b = 20;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);


for (let  i= 0; i < 5; i ++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);    
}

let number1;
const number2 = 10;

const obj1 = {
    name: "Joatmon"
};

console.log(obj1.name);

obj1.name = "Chandler";

console.log(obj1.name);