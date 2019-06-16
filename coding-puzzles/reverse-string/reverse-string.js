// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//method 1
function reverse(str) {
  return [...str].reverse().join('');
}

console.log(reverse('apple'));
console.log(reverse('hello'));
console.log(reverse('Greetings!'));


/// Method 2
function reverse1(str) {
  let reversed = '';
  for (let c of str) {
    reversed = c + reversed;
    console.log(reversed);

  }
  return reversed;
}
console.log(reverse1('apple'));
// Method 3
function reverse2(str) {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str.charAt(i);
  }
  return rev;
}
console.log(reverse2('a z i cd'));

module.exports = reverse;