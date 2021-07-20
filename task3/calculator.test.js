const Calculator = require('./calculator');
c1 = new Calculator(2,2)

describe('Calculator', () =>{
    test('checks add', () => {
        expect(c1.add()).toBe(4);
    });
    test('checks substract', () => {
        expect(c1.substract()).toBe(0);
    });
    test('checks multiply', () => {
        expect(c1.multiply()).toBe(4);
    });
    test('checks divide', () => {
        expect(c1.divide()).toBe(1);
    });
})