let decoder = str => {
  let obj = {};
  let c = 1;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = c;
    } else {
      obj[str[i]] += c;
    }
  }
  return obj;
};

console.log(decoder("AAABBAACCCD"));
