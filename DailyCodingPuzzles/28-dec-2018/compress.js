// Ex input: AAABBBBCC
// Ex output: 3A4B2C

function compress(str) {
  let x = [...str]
  let res = [];
  let j = 0; let count = 1;
  for (let i = 1; i < x.length; i++) {
    const el = x[j];
    if (el === x[i]) {
      count++;
    }
    else {
      j = count;
    }
  }
  return res;
}

console.log(compress('AAABBBBCC'));
