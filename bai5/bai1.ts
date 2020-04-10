let user = "Chandler";
let greet = `Welcome 'single' " double " ${user} to ES`;
console.log(greet);

let colors = ['Red', 'Blue', 'Green'];

for(let index in colors) {
    console.log(colors[index]);
}

for(let color of colors) {
    console.log(color);
}

// const letters = "ABC";

// for(let letter of letters) {
//     console.log(letter);
// }
