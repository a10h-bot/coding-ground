
// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vCount = 0;
  let Vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  [...str].forEach(e => {
    if (Vowels.includes(e)) {
      vCount++;
    }
  })
  return vCount
}
console.log(findVowels('Hi There'));
console.log(findVowels('Why do you ask?'));
console.log(vowels('why'));

module.exports = vowels;