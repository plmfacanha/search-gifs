import "./styles.css";
const apiKey = "IsYsjxtdkINxIUCj8uqTuZatf4yNuZwg";
const input = document.getElementById("search");
const button = document.querySelector(".btn");
const image = document.querySelector(".image");

button.addEventListener("click", () => {
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
