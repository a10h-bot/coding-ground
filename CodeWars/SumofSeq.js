//https://www.codewars.com/kata/586f6741c66d18c22800010a
let sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};

console.log(sequenceSum());

