const caesarCipher = require("../functions/ceasarCipher");
const sharedInput = "abc";

test("is string", () => {
  expect(() => caesarCipher(sharedInput)).not.toThrow(Error);
});

test("all lowercase", () => {
  expect(caesarCipher(sharedInput)).toBe("bcd");
});

test("all uppercase", () => {
  expect(caesarCipher("ABC")).toBe("bcd");
});

test("mixed case", () => {
  expect(caesarCipher("AbCd")).toBe("bcde");
});

test("punctuation", () => {
  expect(() => caesarCipher("!//..")).toThrow(Error);
});

test("end of alphabet", () => {
  const string = "yza";

  expect(caesarCipher(string)).toBe("zab");
  expect(caesarCipher(string)).toBe("zab");
});
