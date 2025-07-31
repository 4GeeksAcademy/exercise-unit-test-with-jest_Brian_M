test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./conversorCoin.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

test("One dollar should be 150.83 yens",function () {
    const { fromDollarToYen } = require ('converseCoin.js');

    const yens = fromDollarToYen(6.5);
    
    const expected = 6.5 * 150.83;

     expect(fromDollarToYen(6.5)).toBe(980.395);
});

test("One yen should be 0.005 pounds",function(){
    const { fromYenToPound } = require('./conversorCoin.js')

    const pounds = fromYenToPound(6.66);

    const expected = 6.66 * 0.005;

     expect(fromYenToPound(6.66)).toBe(0.0333);
})