document.addEventListener("DOMContentLoaded", function () {
  const scoreInput = document.getElementById("score");
  const addScore = document.getElementById("addScore");
  const averageDisplay = document.getElementById("average");
  const highestDisplay = document.getElementById("highest");
  const scoreList = document.getElementById("scoreList");

  let scores = [];

  addScore.addEventListener("click", function () {
    const score = parseInt(scoreInput.value);
    if (!isNaN(score) && score >= 0 && score <= 20) {
      scores.push(score);
      updateStats();
      addScoreToList(score);
      scoreInput.value = "";
    } else {
      alert("Voer een geldige score in tussen 0 en 20.");
    }
  });

  function updateStats() {
    const total = scores.reduce((acc, score) => acc + score, 0);
    const average = (total / scores.length).toFixed(2);
    const highest = Math.max(...scores);
    averageDisplay.textContent = average;
    highestDisplay.textContent = highest;
  }

  function addScoreToList(score) {
    const li = document.createElement("li");
    li.textContent = score;
    scoreList.appendChild(li);
  }
});