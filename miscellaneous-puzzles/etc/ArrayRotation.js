
function rotataArray(input,d,n){
    let output =[];let j=0;
    for(let i=input.length-1;i>=0;i--){
         output[j]=input[i];
         j++;
    }
    return output;
}
let x =[1, 2, 3, 4, 5, 6, 7];
console.log(x.length);
console.log(rotataArray(x));
