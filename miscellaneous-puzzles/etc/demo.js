// Program to find n-th stair using step size 
// 1 or 2 or 3. 


// Returns count of ways to reach n-th stair 
// using 1 or 2 or 3 steps. 
function findStep(n) {
    if (n == 1 || n == 0)
        return 1;
    else if (n == 2)
        return 2;

    else
        return findStep(n - 3) +
            findStep(n - 2) +
            findStep(n - 1);
}
console.log(findStep(6));

//dynamic programming solution

function countWays2(n) {
    let res = [n + 1];
    res[0] = 1;
    res[1] = 1;
    res[2] = 2;
    for (let i = 3; i <= n; i++)
        res[i] = res[i - 1] + res[i - 2] +
        res[i - 3];

    return res[n];
}
console.log(countWays2(4));