// let fname = "Chandler"

// let lname = "Bing";

// let obj = {
//     name: "Joey"
// };

// console.log('module B');
// export { fname, lname, obj }

export function greet(message) {
    console.log(message);
}

export class GreetMessage {
    constructor() {
        console.log('Contructor');
    }

    greet() {
        console.log('Greet function');
    }
}