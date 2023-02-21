let favourite_food = ["pizza", "pasta"];

console.log(favourite_food[0][0]);

favourite_food.push("Ramen");
// splice -> where to insert, how many to remove (from the insertion point), the value
// favourite_food.splice(1, 2)

// console.log(favourite_food);

for (const food of favourite_food) {
  console.log("const food = ", food);
  console.log(food);
}

console.log(favourite_food.length)