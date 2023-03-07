const marks = [65, 72, 81, 40, 56];

const isPass = function(mark: number) {
  return mark >= 50;
};

// if filter evaluates the iteration to true, it keeps the element...
const filteredMarks = marks.filter(isPass);
console.log(filteredMarks);