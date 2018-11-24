const form = document.querySelector("form");
const input = document.querySelector("input");
const loadingImage = document.querySelector("#loadingImage");
const imageSection = document.querySelector(".images");
const API_URL =
  "https://api.unsplash.com/photos/?client_id=86410845e5d2a0c406f039c45802fe8a74fe6ec878e0758e829222b70c85137d&&include_states=true&formats=jpeg&exclude_nude=true";

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  //console.log(event);
  const searchTerm = input.value;
  //searchStart();
  search(searchTerm);
}
//function searchStart() {
// loadingImage.style.display = "";
//imageSection.innerHTML = "";

//}
function search(searchTerm) {
  const url = `${API_URL}&term=${searchTerm}`;
  //console.log(url);

  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result;
    });
}

function displayImages(result) {
  for (let i = 0; i < result.length; i++) {
    const imageElement = document.createElement("img");
    imageElement.src = result[i].urls.regular;
    imageSection.appendChild(imageElement);
  }
}
//how to make an HTTP requet in JavaScript
