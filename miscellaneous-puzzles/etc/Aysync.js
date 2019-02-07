async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait till the promise resolves (*)

    console.log(result);
}

f();

var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (eachName, index) {
    console.log(index + 1 + ". " + eachName);
});

let s = {
    City: "Patna",
    Country: "India"
};
console.log(s);
console.log(s.City + "   " + s.Country);
console.log(`${s.City} ${s.Country}`);