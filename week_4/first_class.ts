type Fmtr = (str: string) => string;

function brackets(str: string) {
  return `(${str})`;
}

function fullstop(str: string) {
  return `${str}.`;
}

function sayHi(name: string, format: Fmtr) {
  return `Hello, ${format(name)}!`;
}

const result = sayHi('Hayden', brackets) +
             ' -- ' +
             sayHi('Hayden', fullstop);

console.log(result);