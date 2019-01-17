//Imperative programing 

function simpleJoin(stringArray) {
    var accumulator = "";
    for (var i = 0, l = stringArray.length; i < l; i++) {
        accumulator = accumulator + stringArray[i] + " ";
    }
    return accumulator;
}

console.log(simpleJoin("helloJoin"));

//OO programming/imperative programming
Array.prototype.add = function (stringArray) {
    var accumulator = "";
    for (var i = 0, l = stringArray.length; i < l; i++) {
        accumulator = accumulator + stringArray[i];
    }
    return accumulator;
}

var x = new Array();
var y = x.add("helloJoin");
console.log(y);

// functional style 
function simpleJoin(stringArray, i, accumulator) {
    if (i === stringArray.length) {
        return accumulator
    } else {
        return simpleJoin(
            stringArray, i + 1, accumulator + stringArray[i])
    }
}

console.log(simpleJoin("Hello", 0, ""))

var showName = function () {
    var name = "FP JavaScript"
    return function () {
        console.log(name)
    }
}()
showName()