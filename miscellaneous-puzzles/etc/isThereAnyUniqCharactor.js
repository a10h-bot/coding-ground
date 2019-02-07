//implement an algo to determine if a string has all unique charactors



function isThereAnyUniqCharactor(str) {
    let s = str.split("");
    let x = new Set();
    let flag = true;
    for (let i = 0; i < str.length; i++) {
        if (x.add(x[i])) {
            return false;
        }
    }

    return x;
}
let s = "helleoo";

console.log(isThereAnyUniqCharactor(s));