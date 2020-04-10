var getRegvalue = function() {
    return 10;
}

console.log(getRegvalue());


const getArrowvalue = m => 10 * m;


console.log(getArrowvalue(5));

console.log(typeof getArrowvalue);

var employee = {
    id: 1,
    greet: function() {
        setTimeout(function() {
            console.log(this.id);
        }, 1000);
    }
}

employee.greet();