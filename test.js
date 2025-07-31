const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
	let total = sum (14,9);
	expect(total).toBe(23);
});


const { fromEuroToDollar } = require('./app.js');
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

const { fromDollarToYen } = require('./app.js');

test("One dollar should be 150.83 yens",function () {
    const yens = fromDollarToYen(6.5);   
    const expected = 6.5 * 150.83;
    expect(fromDollarToYen(6.5)).toBe(980.3950000000001);
});

const { fromYenToPound } = require('./app.js');
test("One yen should be 0.005 pounds",function(){
    const pounds = fromYenToPound(6.66);
    const expected = 6.66 * 0.005;
     expect(fromYenToPound(6.66)).toBe(0.0333);
})