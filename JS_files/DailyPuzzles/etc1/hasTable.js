let hashTable ={1:"hello",3 :"yello"};
console.log(hashTable);
let h = new Object(); // or just {}
h['one'] = 1;
h['two'] = 2;
h['three'] = 3;
h['four'] =10;

// show the values stored
for (let k in h) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (h.hasOwnProperty(k)) {
        console.log('key is: ' + k + ', value is: ' + h[k]);
    }
}
