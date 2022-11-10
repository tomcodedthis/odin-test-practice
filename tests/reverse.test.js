const reverse = require("../functions/reverse");

test("is string", () => {
  expect(() => {
    reverse(111);
  }).toThrow(Error);
  expect(() => {
    reverse(" ");
  }).not.toThrow(Error);
});

test("reverses", () => {
  expect(reverse("yoo")).toBe("ooy");
  expect(reverse("123")).toBe("321");
});
