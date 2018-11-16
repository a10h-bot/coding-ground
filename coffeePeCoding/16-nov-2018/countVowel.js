//write a program to count no of vowels in a word
// input = "david" => 2  // o(n2)
const countVowel = str => {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < checker.length; j++) {
      if (str[i] === checker[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(countVowel("Hello")); //2
//------------------------------------------------------------------------
function vowels(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) count++;
  }

  return count;
}
console.log(vowels("hello")); //2
//------------------------------------------------------------------------

const countV = str => {
  const matches = str.match(/[aeiou]/g);
  return matches ? matches.length : 0;
};

console.log(countV("hello")); //2
