// DOM trong javsScript

// Document Object Model

const btn = document.getElementById("btn");
const passwordInput = document.querySelector("#passwordInput");
const container = document.querySelector(".container");
let passwordValue;

console.log(passwordInput);

// btn.addEventListener("click", function (event) {
//     console.log("bạn vùa click vào button");
// })

passwordInput.addEventListener("change", function (event) {
    console.log(event.target.value);
})
const linkImg = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

let imgElement;

imgElement = document.createElement("img");
{/* <img></img> */ }
imgElement.setAttribute("src", linkImg);
{/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img> */ }

container.appendChild(imgElement);