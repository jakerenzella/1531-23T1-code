// Returns a new string with vowels removed

function removeVowels(input) {
  const voweles = ["a", "e", "i", "o", "u"];
  return [...input].filter((x) => !voweles.includes(x)).join("");
}

export { removeVowels };
