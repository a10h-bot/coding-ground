const form = document.querySelector("form");
const input = document.querySelector("input");
const loadingImage = document.querySelector("#loadingImage")

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
    event.preventDefault();
    console.log(event);
    const searchTerm = input.value;
    console.log(searchTerm);
    search(searchTerm);

}

function search(searchTerm) {

}