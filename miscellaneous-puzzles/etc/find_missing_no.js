//Find Missing Number on Integer Array of 1 to 100 

let array = [];
for (let i = 1; i <= 100; i++) {
        //cerating array of element from 1 t0 100 except 9 in it
        if (i !== 9)
                array.push(i);
}
//calculate sum of the numbers by using
// n*(n+1)/ and then minus from the array elemnts sum

let sum = 100 * (100 + 1) / 2
let s = 0;
for (let i = 0; i < array.length; i++) {
        s += array[i];
}
console.log(sum - s); //9

//find 2nd missing number 

let array2 = []
for (let i = 1; i <= 100; i++) {
        array2[i] = i;
        array2[45] = 19
}
console.log(array2);
let res = array2.sort(function (a, b) {
        return a - b
});
console.log(res);

//