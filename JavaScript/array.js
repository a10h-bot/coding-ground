let array = [2,3,7,8,10];
  
 array.push(12);


 for(let k=0;k<array.length;k++){
 	array[k]='Hi' + array[k];
 }

 console.log(array);