var user = "Chandler";
var greet = "Welcome 'single' \" double \" " + user + " to ES";
console.log(greet);
var colors = ['Red', 'Blue', 'Green'];
for (var index in colors) {
    console.log(colors[index]);
}
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
// const letters = "ABC";
// for(let letter of letters) {
//     console.log(letter);
// }
