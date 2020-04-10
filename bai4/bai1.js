var firstname = "Chandler";
var lastname = "Bing";
var person = {
    firstname: firstname,
    lastname: lastname
};
console.log(person.firstname);
console.log(person.lastname);
function createPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("Ross", "Geller", 65);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
