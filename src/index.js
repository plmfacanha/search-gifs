import "./styles.css";
const apiKey = "IsYsjxtdkINxIUCj8uqTuZatf4yNuZwg";
const input = document.getElementById("search");
const form = document.querySelector(".form");
const image = document.querySelector(".image");
const spanError = document.querySelector("span.error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const gif = input.value;

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${gif}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(response);
      return response.json();
    })
    .then((result) => {
      image.src = result.data.images.original.url;
    })
    .catch((error) => {
      console.error("Error fetching the image:", error);
    });
});

input.addEventListener("input", () => {
  if (input.validity.valid) {
    spanError.textContent = ""; // Remove the message content
    spanError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

function showError() {
  if (input.validity.valueMissing) {
    // If empty
    spanError.textContent = "You need to enter some text yo!";
  }
  spanError.classList.add("active");
}
