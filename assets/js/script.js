let score = 0;

const scoreDisplay = document.getElementById("score");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");


increaseButton.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
});

decreaseButton.addEventListener("click", () => {
    score--;
    scoreDisplay.textContent = score;
});

