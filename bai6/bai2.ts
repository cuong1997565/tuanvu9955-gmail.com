class Person {
    name : string;
    constructor(name : string) {
        console.log(name + " Person constructor");
    }
    getID() {
        return 10;
    }
}

class Employee extends Person {
    name: string;
    constructor(name: string) {
        super(name);
        console.log(name + " Employee constructor");
    }
    getID() {
        return super.getID();
    }
}

let e = new Employee("Chandler");
console.log(e.getID());