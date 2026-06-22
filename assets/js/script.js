let score = 0;

const scoreDisplay = document.getElementById("score");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

function updateScore() {
    scoreDisplay.textContent = score;
}

increaseButton.addEventListener("click", () => {
    score++;
    updateScore();
});

decreaseButton.addEventListener("click", () => {
    score--;
    updateScore();
});

updateScore();