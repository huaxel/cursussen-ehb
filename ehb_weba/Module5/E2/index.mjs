document.addEventListener("DOMContentLoaded", () => {
    const clickButton = document.getElementById("clickButton");
    const counterElement = document.querySelector(".counter");
    const messageElement = document.querySelector(".message");
    let counter = 0;
    function tikCounter() {
        return new Promise((resolve) => {
            clickButton.addEventListener("click", function handler() {
                counter++;
                counterElement.textContent = counter;
                console.log(`Klik ${counter} geregistreerd`);
                if (counter === 5) {
                    clickButton.removeEventListener("click", handler);
                    resolve();
                }
            });
        });
    }

    async function showMessage() {
        await tikCounter();
        messageElement.textContent = "Gefeliciteerd! Je hebt 5 keer geklikt!";
        clickButton.disabled = true;
    }
    showMessage();
});
