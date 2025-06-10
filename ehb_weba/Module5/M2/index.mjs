document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const cancelButton = document.getElementById("cancelButton");
    const secondsInput = document.getElementById("seconds");
    const timerDisplay = document.getElementById("timerDisplay");
    const messageDisplay = document.getElementById("message");

    let cancelTimer;
    let timerCompleted = false;

    function showMessage(message, type) {
        messageDisplay.textContent = message;
        messageDisplay.className = type;
        messageDisplay.style.display = "block";
    }

    function createTimer(seconds) {
        return new Promise((resolve) => {
            let remainingTime = seconds;
            timerDisplay.textContent = remainingTime;

            const timerInterval = setInterval(() => {
                remainingTime--;
                timerDisplay.textContent = remainingTime;

                if (remainingTime <= 0) {
                    clearInterval(timerInterval);
                    timerCompleted = true;
                    resolve(true);
                }
            }, 1000);

            cancelTimer = () => {
                clearInterval(timerInterval);
                showMessage("Timer geannuleerd", "info");
                resolve(false);
            };
        });
    }

    startButton.addEventListener("click", () => {
        const seconds = parseInt(secondsInput.value);
        if (isNaN(seconds) || seconds < 1) {
            showMessage(
                "Geef een geldig aantal seconden op (minimum 1)",
                "error"
            );
            return;
        }

        startButton.disabled = true;
        cancelButton.disabled = false;
        showMessage("Timer gestart!", "info");

        createTimer(seconds)
            .then(() => {
                if (timerCompleted) {
                    showMessage("Timer voltooid", "succes");
                }
            })
            .catch((error) => {
                showMessage(error.message, "error");
            })
            .finally(() => {
                startButton.disabled = false;
                cancelButton.disabled = true;
            });
    });

    cancelButton.addEventListener("click", () => {
        if (cancelTimer) {
            cancelTimer();
        }
    });
});
