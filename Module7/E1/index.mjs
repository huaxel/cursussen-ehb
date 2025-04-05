document.addEventListener("DOMContentLoaded", () => {
    const resultDiv = document.getElementById("result");
    const fetchButton = document.getElementById("fetchButton");
    try {
        fetchButton.addEventListener("click", async () => {
            resultDiv.innerHTML = "Loading...";
            // Simulate a network delay
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            
            if (!response.ok) {
                throw new Error(`HTTP error!: ${response.status}`);
            }

            const data = await response.json();
            resultDiv.innerHTML = `Taak: ${data.title}`;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        resultDiv.innerHTML = "Error fetching data. Please try again.";
        resultDiv.classList.add("error");
    }
});
