function reverseString(str) {
  if (str.trim() === "") return str;
  if (str.trim().length === 1) return str.trim();
  let res = [];
  str.split(' ').forEach(element => {
    let x = '';
    for (let i = element.length - 1; i >= 0; i--) {
      x += element.charAt(i);
    }
    res.push(x);

  });
  return res.join(" ")
}

console.log(reverseString("Let 's take LeetCode hello"));

function helper(str) {
  str = [...str];
  var right = str.length - 1;
  var left = 0;
  while (left < right) {
    var temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;

  }
  return str.join("");

}


console.log(helper('Welcome to London'));