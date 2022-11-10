const calculator = require("../js/calculator");

test.skip("is number", () => {
  const input = { a: 2, b: 3 };
  expect(() => calculator.isNumbers(sharedInput)).not.toThrow(Error);
});

test.skip("sum", () => {
  const input = { a: 2, b: 3 };
  expect(calculator.sum(sharedInput)).toBe(5);
});

test.skip("subract", () => {
  const input = { a: 10, b: 3 };
  expect(calculator.subtract(input)).toBe(7);
});

test.skip("divide", () => {
  const input = { a: 40, b: 2 };
  expect(calculator.divide(input)).toBe(20);
});

test.skip("multiply", () => {
  const input = { a: 5, b: 10 };
  expect(calculator.multiply(input)).toBe(50);
});
