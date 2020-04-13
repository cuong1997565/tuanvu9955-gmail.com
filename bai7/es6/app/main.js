// // console.log('Module A log 1');
// import { fname, lname, obj } from './moduleB';
// // console.log('Module B log 2');
// console.log(fname);
// console.log(lname);
// obj.name = "Ross";
// console.log(obj.name);

// import { greet, GreetMessage } from './moduleB';
// greet("hello word");

// let gm = new GreetMessage();
// gm.greet();

// let mySet = Object.create(null);
// mySet.id = 0;
// if(mySet.id) {
//     console.log('id exits');
// }

// let myMap = Object.create(null);
// myMap.name = "Chandler";
// let val = myMap.name;
// console.log(val);

//////////////////////
// let mySet = new Set();
// let ob1 = {};
// let ob2 = {};
// mySet.add("Hello");
// mySet.add(1)
// mySet.add(ob1)
// mySet.add(ob2)
// console.log(mySet.size);
///////////////////////

// let mySet = new Set();
// let key = {};
// mySet.add(key);
// console.log(mySet.size);
// key = null;
// console.log(mySet.size);
// key = [...mySet][0];
// console.log(key);
//////////////////////////////////

// let set = new WeakSet();
// let key = {};
// set.add(key);
// console.log(set.has(key));
// key = null;

///////////////////////////
// let myMap = new Map();

// myMap.set("fname", "Chandler");

// myMap.set("age", 30);

// console.log(myMap.get("fname"));

// let ob1 = {};
// let ob2 = {};
// myMap.set(ob1, 10);
// myMap.set(ob2, 20);
// console.log(myMap.get(ob1));

// myMap.delete("fname");

// console.log(myMap.size);
// console.log(myMap.has("fname"));

///////////////////////////
// let myMap = new Map([
//     ['fname', 'Chandler'],
//     ['lname','Bing']
// ]);

// for(let value of myMap.values()) {
//     console.log(value);
// }

// for(let key of myMap.keys()) {
//     console.log(key);
// }

// for (let [key, value] of myMap.entries()) {
//     console.log(`${key} -> ${value}`);
// }
/////////////////////

// var numbers = [2, 4, 6, 8];
// numbers.forEach(arrayFunction);
// function arrayFunction(element, index, array) {
//     console.log("arr[" + index + "]=" + element);
// }

// let myMap = new Map([["fname","Chandler"], ["lname","Bing"]]);
// myMap.forEach(mapFunction);
// function mapFunction(value, key, callingMap) {
//     console.log(key + " " + value);
//     console.log(myMap === callingMap);
// }

// let myMap = new WeakMap();
// let ob1 = {};
// myMap.set(ob1, "Hello World");
// console.log(myMap.get(ob1));
// ob1 = null;

////////////////////////////
let s = Symbol("First Symbol");
console.log(typeof s);
console.log(s.toString());

let s2 = Symbol("Test");
let s3 = Symbol("Test");
console.log(s2 === s3);

let s4 = Symbol.for('RegSymbol');
let s5 = Symbol.for('RegSymbol');
console.log(s4 === s5);
console.log(Symbol.keyFor(s4));

let fname = Symbol("FirstName");
let person = {
    [fname] : "Chandler"
};
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));