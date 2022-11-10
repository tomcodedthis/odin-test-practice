const analyzeArray = require("../functions/analyzeArray");
const sharedInput = [1, 8, 3, 4, 2, 6];

test("average", () => {
  expect(analyzeArray.average(sharedInput)).toBe(4);
});

test("min", () => {
  expect(analyzeArray.min(sharedInput)).toBe(1);
});

test("max", () => {
  expect(analyzeArray.max(sharedInput)).toBe(8);
});

test("length", () => {
  expect(analyzeArray.length(sharedInput)).toBe(6);
});

test("is number", () => {
  const input = ["a", "b", "c"];

  expect(() => analyzeArray.isNumber(input)).toThrow(Error);
  expect(() => analyzeArray.isNumber(sharedInput)).not.toThrow(Error);
});
