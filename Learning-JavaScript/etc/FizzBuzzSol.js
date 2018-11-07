/*let n = 0;
let s ="#";

while(n<7){
        console.log(s);
        s+="#";
        n++;
    }
*/
/*function fizzBuzz(){
  for(let i=1;i<=100;i++){
    if(i%3 === 0 && i%5===0){
      console.log("fizzBuzz");
    }
    else if(i%3===0){
      console.log("Fizz");
  }
  else if(i%5 === 0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}
}
fizzBuzz();

let fizzBuzz =[];
for(let i=1;i<=100;i++){
  if (i%3 ===0 && i% 5===0) {
    fizzBuzz.push("fizzBuzz");
  }
    else if (i%3 ===0) {
      fizzBuzz.push("Fizz");
    }
    else if (i%5===0) {
      fizzBuzz.push("Buzz");

    }
    else {
      fizzBuzz.push(i);
    }
}
console.log(fizzBuzz);
/*

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/
// first attempt went horribly wrong
/*let chess =[];
let s =" ";
for(let i=6;i<8;i++){
     let y=5;
     while (y!==0) {
       chess.push(s);
       s+="#";
       y--;
     }
}
console.log(chess);
*/
let chess = "";
for(let i=1;i<=8;i++){
   if(i%2!==0){
  for(let j=1;j<=8;j++){
       if(j==1 || j==5){
         chess+=" ";
       }
       else{
         chess+="#";
       }
    }
  }
    chess +="\n";
   if(i%2===0){
      for(let j=1;j<=8;j++){
           if(j==1 || j==5){
             chess+="#"
           }
           else{
             chess+= "#";
           }
        }
    }    

}
console.log(chess);
