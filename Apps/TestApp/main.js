// function functionLoad() {
//   const x = document.querySelector(".fname");
//   const y = document.querySelector(".lname");
//   document.querySelector(".output").innerHTML = x.value + y.value;
// }

function grabItem() {
  document.getElementById("myBtn").addEventListener("submit", doPrint);
  function doPrint() {
    document.getElementById("output").innerHTML = Date();
  }
}
