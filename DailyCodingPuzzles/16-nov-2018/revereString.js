// Given a string, return a new string with the reversed
// order of characters
//   reverse('apple') === 'elppa'
//   reverse('Greetings!') === '!sgniteerG'
const reverString = str => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str.charAt(i);
  }
  return res;
};

console.log(reverString("Greetings!"));
//-------------------------------------------------------------------------
const reveString = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

console.log(reveString("apple"));
//-------------------------------------------------------------------------
const revString = str => {
  let res = "";
  for (let char of str) {
    res = char + res;
  }
  return res;
};
console.log(revString("hello"));
//__________________________________________
