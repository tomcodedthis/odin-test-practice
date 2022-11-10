const calculator = require("../functions/calculator");

test("is number", () => {
  const input = { a: 2, b: 3 };
  expect(() => calculator.isNumbers(input)).not.toThrow(Error);
});

test("sum", () => {
  const input = { a: 2, b: 3 };
  expect(calculator.sum(input)).toBe(5);
});

test("subract", () => {
  const input = { a: 10, b: 3 };
  expect(calculator.subtract(input)).toBe(7);
});

test("divide", () => {
  const input = { a: 40, b: 2 };
  expect(calculator.divide(input)).toBe(20);
});

test("multiply", () => {
  const input = { a: 5, b: 10 };
  expect(calculator.multiply(input)).toBe(50);
});
