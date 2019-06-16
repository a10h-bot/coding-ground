function printFizzBuzz(n){
  let result =[];

  for(let i=1;i<=n;i++){
    let add ='';

  if(i%3===0){
    add+='fizz';
  }
  if(i%5===0){
    add+='buzz';
  }
if(add===''){
  result.push(i);
}
  else {
      result.push(add);
    }

  }
  return result;
}

console.log(printFizzBuzz(15));
