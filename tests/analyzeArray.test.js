const analyzeArray = require('../js/analyzeArray');
const shared = [1,8,3,4,2,6];

test.skip('average', () => {
    expect(analyzeArray.average(shared)).toBe(4);
});

test.skip('min', () => {
    expect(analyzeArray.min(shared)).toBe(1);
});

test.skip('max', () => {
    expect(analyzeArray.max(shared)).toBe(8);
});

test.skip('length', () => {
    expect(analyzeArray.length(shared)).toBe(6);
});

test.skip('is number', () => {
    const letters = ['a', 'b', 'c']
    expect(() => analyzeArray.isNumber(letters)).toThrow(Error);
    expect(() => analyzeArray.isNumber(shared)).not.toThrow(Error);
});