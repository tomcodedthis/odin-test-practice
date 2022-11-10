function capitalize(word) {
  if (!word) throw new Error("must not be empty");
  if (typeof word !== "string") throw new Error("must be a string");
  if (/\d/.test(word[0])) new Error("first letter must be string");

  return word[0].toUpperCase() + word.split("").slice(1).join("");
}

module.exports = capitalize;
