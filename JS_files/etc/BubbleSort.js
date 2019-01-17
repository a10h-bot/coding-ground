function bubbleSort(arr){
  for(let i=0;i<arr.length-1;i++){
      for(let j=i+1;j<arr.length-2;j++){
          if(arr[i]>arr[j]){
              let temp = arr[j];
                  arr[j]=arr[i];
                  arr[i]=temp;
          }
      }
  }
  return arr;
}

let A =[7,10,6,4,1,5,2,3,9];
console.log(bubbleSort(A));
    