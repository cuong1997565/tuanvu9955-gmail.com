var message = 'Hello World';
console.log(message);
function greetPerson(name) {
    var greet;
    if (name === 'Chandler') {
        greet = 'Hello Chandler';
    }
    else {
        greet = 'Hi there';
    }
    console.log(greet);
}
greetPerson("Chandler");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a);
    console.log(b_1);
}
console.log(a);
console.log(b);
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
var number1;
var number2 = 10;
var obj1 = {
    name: "Joatmon"
};
console.log(obj1.name);
obj1.name = "Chandler";
console.log(obj1.name);
