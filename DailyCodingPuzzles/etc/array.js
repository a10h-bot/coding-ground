let array = [2, 3, 7, 8, 10];

array.push(12);
array.sort();
console.log(array);


for (let k = 0; k < array.length; k++) {
	array[k] = 'From Array' + " " + array[k];
}

console.log(array);