//variable
const URL = "https://official-joke-api.appspot.com/random_ten";
const picUrl = "https://picsum.photos/v2/list";
const gallery = document.querySelector(".gallery");
const loadImagesButton = document.getElementById("loadImages");

let images = null;

console.log(images);

function handleImages(data) {
  let slicedData = data.slice(0, 10);

  slicedData.forEach((picture) => {
    const img = document.createElement("img");
    img.src = picture.download_url;

    gallery.appendChild(img);
  });
}

// Callback

function loadImages() {
  fetch(picUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      handleImages(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// EVENTS
loadImagesButton.addEventListener("click", loadImages);

// function callThisWhenFetchinIsDone(data) {
//   images = data;

//   console.log(images);
// }

// console.log("Log 1");

// // Syntax
// fetch(URL)
// .then(response => {
//   console.log("Log 2");
//   return response.json()
// })
// .then(data => {
//   console.log("Log 3");
//   console.log(data);
// })
// .catch(error => {
//   console.log("Crtical error", error);
// })

// console.log("Log 4");

// // ==========================

// // console.log("Log 5");

// // for (let index = 0; index < 20; index++) {

// // }

// // console.log("Log 6");
