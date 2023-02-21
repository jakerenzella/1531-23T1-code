// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import#:~:text=If%20there%20is%20any%20default,are%20necessary%20we%20can%20import.
// If there is any default export in the file, there isn't any need to use the curly braces in the import statement.
// if there are more than one export in the file then we need to use curly braces in the import file so that which are necessary we can import.

import { isValid, addSeconds, add } from "date-fns";
// import { isEven, isOdd } from "./helpers.js";
import { isEven, isOdd as isMyNumberOddd } from "./helpers.js";

let my_date = new Date("1/1/2022");
console.log(my_date);

my_date = addSeconds(my_date, 50);

console.log(my_date);

console.log(helpers.isEven(4));
console.log(isMyNumberOddd(4));
