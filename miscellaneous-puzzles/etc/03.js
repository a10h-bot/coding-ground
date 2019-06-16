const arr = [3, 7, 8, 9];

arr.forEach(num => {
  console.log(num * 2);
});

const doubleArrByMap = arr.map(x => {
  return x * 2;
});

console.log(doubleArrByMap);

const a = ["🏏", "🏑", "🥎"];
console.log(a);

const foods = ["🐓", "🌽"];

const dinner = foods.map(food => {
  if (food === "🐓") return "🍗";
  if (food === "🌽") return "🍿";
});

console.log(dinner);

let numbers = [3, 2, 7, 8, 9, 10, 12, 15];

let evenNum = [];

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    evenNum.push(element);
  }
}
console.log(evenNum);

const evenNumber = numbers.filter(x => {
  if (x % 2 === 0) {
    return x;
  }
});
console.log(evenNumber);

const days = [
  "Monday",
  "Sunday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const daysStartWithT = days.filter(day => {
  return day.charAt(0) === "T";
});

console.log(daysStartWithT);
