// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function maxChar(str) {
  let charObj = {};
  let res;
  for (let i = 0; i < str.length; i++) {
    if (charObj[str[i]] === undefined) {
      charObj[str[i]] = 1;
    }
    else {
      charObj[str[i]]++;
    }
  }
  let max = 0;
  let keyArray = Object.keys(charObj)
  for (let i = 1; i < keyArray.length; i++) {
    max = charObj[keyArray[0]];
    if (charObj[keyArray[i]] > max) {
      max = charObj[keyArray[i]];
      console.log(max);
    }
  }
  for (let key in charObj) {
    if (charObj[key] === max) {
      res = key;
    }
  }
  return res;
}
console.log(maxChar("abcccccccd"));
console.log(maxChar('apple 1231111'));
console.log(maxChar('abcdefghijklmnaaaaa'));



export default maxChar;