// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1, str2) {
  return [...str1.trim()].length === [...str2.trim()].length && [...str1.trim()].sort().every((value, index) => value === [...str2.trim()].sort[index])

}
const anagrams1 = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};
// console.log(anagrams1('rail safety', 'fairy tales'));
// console.log(anagrams1('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagrams1('Hi there', 'Bye there'));

module.exports = anagrams;

