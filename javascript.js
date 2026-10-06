const button = document.querySelector("#button");
const message = document.querySelector("#message");

function changeMessage() {
    message.textContent =
    "It's Me!";
    message.style.color = "white"
    document.body.style.backgroundColor = "blue"
}

button.addEventListener("click", changeMessage);
