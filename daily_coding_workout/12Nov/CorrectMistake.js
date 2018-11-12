/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.


const correct = str => {
  str = str.replace(/0/g, "O");
  str = str.replace(/5/g, "S");
  str = str.replace(/I/g, "1");
  return str;
};

console.log(correct("L0ND0N5I"));
*/

let solution = str => {
  return str.replace(/0|5|1/g, letter => {
    switch (letter) {
      case "0":
        return "O";
      case "5":
        return "S";
      case "1":
        return "I";
    }
  });
};

console.log(solution("L0ND0N5I"));
