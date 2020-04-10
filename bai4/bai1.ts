let firstname = "Chandler";
let lastname = "Bing";

let person = {
    firstname,
    lastname
};

console.log(person.firstname);
console.log(person.lastname);


function createPerson(firstname, lastname, age) {
    let fullname = firstname + " " + lastname;
    return { 
        firstname, 
        lastname, 
        fullname,
        isSenior: function() {
            return age > 60;
        }
     };
}

let p = createPerson("Ross", "Geller", 65);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);

console.log(p.isSenior());