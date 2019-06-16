const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading ");
loadingElement.style.display = "none";
const API_URL = "http://localhost:5000/tweets";
const resElement = document.querySelector('.res');

form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const content = formData.get("content");
  const tweet = {
    name,
    content
  };
  form.style.display = "none";
  loadingElement.style.display = "";

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(tweet),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json())
    .then(createdMews => {
      form.reset();
      form.style.display = "";
      listAllTweets()
      loadingElement.style.display = 'none';
    })
});

function listAllTweets() {
  resElement.innerHTML = '';
  fetch(API_URL)
    .then(response => response.json())
    .then(obj => {
      obj.reverse();
      obj.forEach(element => {
        const div = document.createElement('div');
        const header = document.createElement('h3');
        header.textContent = element.name;
        const content = document.createElement('p');
        const date = document.createElement('p');
        date.textContent = new Date(element.created);
        content.textContent = element.content;
        div.appendChild(header);
        div.appendChild(content);
        div.appendChild(date);
        resElement.appendChild(div);
      });
    });
}