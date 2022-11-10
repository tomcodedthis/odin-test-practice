const caesarCipher = require("../js/ceasarCipher");
const sharedInput = "abc";

test.skip("is string", () => {
  expect(() => caesarCipher(sharedInput)).not.toThrow(Error);
});

test.skip("all lowercase", () => {
  expect(caesarCipher(sharedInput)).toBe("bcd");
});

test.skip("all uppercase", () => {
  expect(caesarCipher("ABC")).toBe("bcd");
});

test.skip("mixed case", () => {
  expect(caesarCipher("AbCd")).toBe("bcde");
});

test.skip("punctuation", () => {
  expect(() => caesarCipher("!//..")).toThrow(Error);
});

test.skip("end of alphabet", () => {
  const string = "yza";

  expect(caesarCipher(string)).toBe("zab");
  expect(caesarCipher(string)).toBe("zab");
});
