const button = document.querySelector("#button");
const Image = document.querySelector("#Image");
const message = document.querySelector("#message");

function changeImage() {
    image.src="boo2.jpg";
    document.body.style.backgroundColor = "black"
}
function changeMessage() {
    message.textContent =
    "Happy Halloween!";
    message.style.color = "white"
}
element.addEventListener("click", changeImage);

element.addEventListener("click", changeMessage);