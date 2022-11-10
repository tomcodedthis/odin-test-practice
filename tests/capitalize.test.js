const capitalize = require("../js/practice");

test.skip("test: is not empty", () => {
  expect(() => capitalize()).toThrow(Error);
  expect(() => capitalize("   ")).not.toThrow(Error);
});

test.skip("test: is a string", () => {
  expect(() => capitalize(1)).toThrow(Error);
  expect(() => capitalize(f)).toThrow(Error);
});

test.skip("test: not start with number", () => {
  expect(() => capitalize("yoo")).not.toThrow(Error);
  expect(() => capitalize("1oo")).toThrow(Error);
});

test.skip("test: cannot convert string", () => {
  expect(capitalize("yoo")).toBe("Yoo");
  expect(capitalize("yoo")).not.toBe("yoo");
});
