let candyNum =[1,2,3,4,5,6,7,8,15];
let saraCandy =0;
let samiCandy =0;
for(let i=0;i<candyNum.length;i++){
  if(candyNum[i]%3 ==0 || candyNum[i]%5==0){
    saraCandy++;
  }
  if(candyNum[i]%3==0){
    saraCandy ++;
  }
  else if(candyNum[i]%5==0){
    samiCandy++;
  }
}
console.log(samiCandy);
console.log(saraCandy);
