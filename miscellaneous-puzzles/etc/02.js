const sayHello = () => {
  return "Hello, ";
};

greeting = (helloFn, name) => {
  console.log(helloFn() + name);
};

// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");

function addmeFn(num1, num2) {
  return 5;
}

function addmeTo(func, num) {
  console.log(addmeFn() + num);
}

addmeTo(addmeFn, 7);
