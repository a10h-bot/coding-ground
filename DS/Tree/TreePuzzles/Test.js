function factorial(n, accumulator) {
    if (n === 0) {
        return accumulator;
    } else {
        return factorial(n - 1, n * accumulator);
    }
}

console.log(factorial(5, 1));

var x = function (n, a) => {
    if (n === 0) {
        return a;
    } else {
        return x(n - 1, n * a)
    }
};
console.log(x(5, 1));


let fac = n => n < 1 ? 1 : n * fac(n - 1);
console.log(fac(6));