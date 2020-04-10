let percentBonus = () => 0.1;
let getVaue = function(value = 10, bonus = 5 * percentBonus()) {
    console.log(value + bonus);
    console.log("data :" + arguments.length);
}

getVaue();
getVaue(20);
getVaue(20, 30);