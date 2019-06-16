// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!

function capitalize(str) {
  let capitalized = str[0].toUpperCase()
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      capitalized += str[i].toUpperCase();
    }
    else {
      capitalized += str[i];
    }
  }
  return capitalized;
}

console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));
//method 2
function capitalize1(str) {
  let res = [];
  str.split(' ').map(e => {
    res.push(e[0].toUpperCase() + e.slice(1))
  })

  return res.join(' ');
}

console.log(capitalize1('a short sentence'));
console.log(capitalize1('a lazy fox'));
console.log(capitalize1('look, it is working!'));
module.exports = capitalize;