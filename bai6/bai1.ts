class Person {
    name: string;
    constructor(name : string) {
        this.name = name;
        console.log(this.name + ' Constructor ');
    }

    static staticMethod() {
        console.log("Static Method");
    }

    greetPerson() {
        console.log('Hello ' + this.name);
    }
}

let p = new Person("Chandler");
Person.staticMethod();
p.greetPerson();