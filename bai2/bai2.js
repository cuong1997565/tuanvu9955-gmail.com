var percentBonus = function () { return 0.1; };
var getVaue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = 5 * percentBonus(); }
    console.log(value + bonus);
    console.log("data :" + arguments.length);
};
getVaue();
getVaue(20);
getVaue(20, 30);
