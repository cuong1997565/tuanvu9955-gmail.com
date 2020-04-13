// let str = "Hello";
// let arr = [1,2,3];
// let num = 5;
// let obj = {name: "Chandler"};
// console.log("Fir string -" + typeof str[Symbol.iterator]);
// console.log("For array -" + typeof arr[Symbol.iterator]);
// console.log("For number -" + typeof num[Symbol.iterator]);
// console.log("For object -" + typeof obj[Symbol.iterator]);
/////////////////////////////////
// let iterable = [1,2,3];
// function createIterable(array) {
//     let count = 0;
//     return {
//         next: function() {
//             return count < array.length ? { value: array[count++], done: false} : {value: undefined, done: true};
//         }
//     }
// }

// let myIterator = createIterable(iterable);
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
///////////////////////////////////

function *createGenerator() {
    yield 1;
    console.log("After 1st yield");
    yield 2;
}

let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());