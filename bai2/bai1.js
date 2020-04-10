var getRegvalue = function () {
    return 10;
};
console.log(getRegvalue());
var getArrowvalue = function (m) { return 10 * m; };
console.log(getArrowvalue(5));
console.log(typeof getArrowvalue);
var employee = {
    id: 1,
    greet: function () {
        var self = this;
        setTimeout(function () {
            console.log(self.id);
        }, 1000);
    }
};
employee.greet();
