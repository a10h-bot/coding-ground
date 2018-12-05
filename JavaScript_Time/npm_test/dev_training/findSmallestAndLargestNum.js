function largestAndSmallest(numbers) {
    let largest = 0;
    let smallest = 0;
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
        if (numbers[i] < smallest)
            smallest = numbers[i];
    }
    return [smallest, largest];

}


let array = [3, 8, 9, 10, 100];
console.log(largestAndSmallest(array))