const reverse = require("../js/reverse");

test.skip("is string", () => {
  expect(() => {
    reverse(111);
  }).toThrow(Error);
  expect(() => {
    reverse(" ");
  }).not.toThrow(Error);
});

test.skip("reverses", () => {
  expect(reverse("yoo")).toBe("ooy");
  expect(reverse("123")).toBe("321");
});
