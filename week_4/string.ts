const manyString = (repeat: number, str: string) => {
  let outString = "";
  for (let i = 0; i < repeat; i++) {
    outString += str;
  }
  return outString;
}
console.log(manyString(5, "hello "));
