const fetch = require("node-fetch");

const URL = "https://jsonplaceholder.typicode.com/todos/1";

let promise = new Promise(function(resolve, rejected) {
  if (event()) {
    resolve("Done");
  } else reject(error("Something broke"));
});
fetch(URL)
  .then(res => res.json())
  .then(res => console.log(res));

fetch(URL)
  .then(function(res) {
    return res.json();
  })
  .then(function(response) {
    console.log(response);
  });
