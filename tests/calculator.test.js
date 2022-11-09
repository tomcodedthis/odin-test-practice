const calculator = require('../js/calculator')
const shared = {
    a: 2,
    b: 3
};

test.skip('is number', () => {
    expect(() => calculator.isNumbers(shared)).not.toThrow(Error);
});

test.skip('sum', () => {
    expect(calculator.sum(shared)).toBe(5);
});

test.skip('subract', () => {
    const numbers = {
        a: 10,
        b: 3
    }
    expect(calculator.subtract(numbers)).toBe(7);
});

test.skip('divide', () => {
    const numbers = {
        a: 40,
        b: 2
    }
    expect(calculator.divide(numbers)).toBe(20);
});

test.skip('multiply', () => {
    const numbers = {
        a: 5,
        b: 10
    }
    expect(calculator.multiply(numbers)).toBe(50);
});