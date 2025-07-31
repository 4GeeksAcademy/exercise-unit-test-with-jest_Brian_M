const sum = (a,b) => {
 return a + b
}
console.log(sum(7,3))

let oneEuro = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro*1.07;
    return valueInDollar;
};
console.log(fromEuroToDollar(3.5,1.07));

let oneDollar = {
    "JPY": 150.83
};

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar*150.83;
    return valueInYen;
};
console.log(fromDollarToYen(6.5,150.83));

let oneYen = {
    "GBP": 0.005
};

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen*0.005;
    return valueInPound;
};
console.log(fromYenToPound(6.66,0.005));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
