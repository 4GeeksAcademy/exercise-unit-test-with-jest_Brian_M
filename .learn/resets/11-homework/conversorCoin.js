let oneEuro = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

function fromEuroToDollar {
    const euToDollar = (EU,USD)
    return EU*USD

};

let oneDollar = {
    "JPY": 150.83
};

function fromDollarToYen {
    const dollarToYen = (USD,JPY)
    return USD*JPY
};

let oneYen = {
    "GBP": 0.005
};

function fromYenToPound {
    const yenToPound = (JPY,GBP)
    return JPY*GBP
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
