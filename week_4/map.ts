const tutors = ["Simon", "Teresa", "Kaiqi", "Michelle"];

const shout = function (str: string) {
  return `${str.toUpperCase()}!!!`;
};

const newList: string[] = tutors.map(shout);

console.log(tutors);
console.log(newList);
