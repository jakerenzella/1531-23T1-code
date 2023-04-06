import crypto from "crypto";

// when deciding on our hashing algorithm, we need to make another decision...
// speed VS security.

function getHashOf(plainstring: string): string {
  // we need to hash the plainstring and return the hash...
  //   return crypto.createHash("SHA256").update(plainstring).digest("hex");

  //salt -> "sprinkled" on to the password before it's hashed to add some noise.
  // if I hash the password "password" -> it will produce a known hash...
  // if I salt it first (add +1 to each character to get qbtt... )
  //iterations is rehashing the hash multiple times...
  return crypto.scryptSync(plainstring, "salt", 64).toString("hex");

  return crypto.createHash("SHA256").update(plainstring).digest("hex");
}

console.log(`Hashing ar_11: ${getHashOf("ar_11")}`);
console.log(`Hashing jake: ${getHashOf("jake")}`);
console.log(`Hashing ar_11: ${getHashOf("ar_11")}`);

export { getHashOf };
