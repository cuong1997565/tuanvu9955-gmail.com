let ln = "last name";
let person = {
    "first name" : "Chandler",
    [ln]: "Bing"
};

console.log(person);

let employee = ["Chandler", "Bing", "Male"];
let [fname, ...elements] = employee;
console.log(fname);
// console.log(lname);
// console.log(gender);
console.log(elements);