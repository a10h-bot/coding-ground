const http = XMLHttpRequest();
const Url = "https://jsonplaceholder.typicode.com/post";

fetch(Url)
  .then(data => {
    return data.json()
  });
.then(res => {
  console.log(res)
});

const Http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
Http.open("GET", url);
Http.send();
Http.onreadystatechange = e => {
  console.log(Http.responseText);
};