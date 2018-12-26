function myfunction() {
  let x = document.getElementById("num1").value;
  let y = document.getElementById("num2").value;
  x = parseInt(x);
  y = parseInt(y);
  document.getElementById("output").innerHTML = x + y;
}
