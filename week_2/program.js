person = {
  name: "jake",
  age: 28,
  height: 175,
  foods: ["pasta", "lasagne"]
};

console.log(person);

person.surname = null;
person['middle_name'] = null;

console.log(person);

// console.log("fhdsjhf" in person);
console.log(
    Object.keys(person)
)
