type Fmtr = (str: string) => string;

function fullstop(str: string) {
  return `${str}.`;
}

function stars(str: string) {
  return `**${str}**`;
}

function brackets(str: string) {
  return `(${str})`;
}

const names = ["Hayden", "Giuliana", "Tam"];

// formatNames accepts a list of strings, and a format function...
function formatNames(list: string[], format: Fmtr) {
  const newList: string[] = [];

  for (const name of list) {
    newList.push(format(name));
  }
  return newList;
}

const newNames = formatNames(names, (str: string) => `###${str}###`);
// const newNames = formatNames(names, brackets);
// const newNames = formatNames(names, fullstop);
console.log(newNames);

// a little more advanced...
const formatters: Fmtr[] = [stars, brackets, fullstop]
for (const formatter of formatters) {
  console.log(formatNames(names, formatter));
}