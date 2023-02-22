// Returns a new string with vowels removed
function removeVowels(input) {
  return [...input]
    .filter(
      (x) => !["a", "e", "i", "o", "u"].includes(x.toLowerCase())
    )
    .join("");
}

export { removeVowels };
