//array contains a value :

function containValue(array, value = 'Yahoo') {
  return array.includes(value)
}

console.log(containValue(['C', 'Java', 'C++', 'Yahoo'], ''));