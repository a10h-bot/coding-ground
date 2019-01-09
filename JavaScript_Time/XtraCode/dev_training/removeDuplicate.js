let array = [3, 6, 9, 8, 9];

function removeDuplicates(numbersWithDuplicates) {

    // Sorting array to bring duplicates together      
    numbersWithDuplicates.sort();
    console.log(array);
    let result = [];
    let previous = numbersWithDuplicates[0];
    console.log(previous);
    result[0] = previous;
    console.log(result);

    for (let i = 1; i < numbersWithDuplicates.length; i++) {
        let ch = numbersWithDuplicates[i];
        console.log(ch);
        if (previous != ch) {
            result[i] = ch;
        }
        previous = ch;
    }
    return result;


}

console.log(removeDuplicates(array));