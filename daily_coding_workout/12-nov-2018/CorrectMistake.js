/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/
//Method # 1
const correct = str => {
  return str
    .replace(/0/g, "O")
    .replace(/5/g, "S")
    .replace(/1/g, "I");
};

console.log(correct("L0ND0N51"));

//Method #2
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
//Method #3
console.log(solution("L0ND0N51"));

let x = string => {
  const mistakes = { 0: "O", 5: "S", 1: "I" };
  return string.replace(/[051]/g, letter => mistakes[letter]);
};

console.log(x("L0ND0N51"));
