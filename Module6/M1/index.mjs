document.addEventListener("DOMContentLoaded", () => {
  const endpointKnoppen = document.querySelectorAll(".endpoint-knop");
  const statusInfo = document.getElementById("status-info");
  const responseDetails = document.getElementById("response-details");

  endpointKnoppen.forEach((knop) => {
    knop.addEventListener("click", async () => {
      // Added async here
      const code = knop.dataset.code;
      statusInfo.innerHTML = "Bezig met ophalen...";
      responseDetails.textContent = "";

      try {
        const response = await fetch(`https://httpstat.us/${code}`);

        // Determine the status category
        let statusClass;
        let statusText = response.statusText; // Get the status text
        let isSuccess = response.ok; // Check if the response is successful

        if (response.status >= 200 && response.status < 300) {
          statusClass = "status-success";
        } else if (response.status >= 300 && response.status < 400) {
          statusClass = "status-redirect";
        } else if (response.status >= 400 && response.status < 500) {
          statusClass = "status-client-error";
        } else if (response.status >= 500) {
          statusClass = "status-server-error";
        }

        // Update the status information
        statusInfo.innerHTML = `<span class="${statusClass}">${statusText}</span><br>Succesvol: ${isSuccess}`;

        // Response headers and type
        const headers = [...response.headers]
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n");
        const responseType = response.type;

        // Update the response details
        responseDetails.textContent = `Response Headers:\n${headers}\n\nResponse Type: ${responseType}`;
      } catch (error) {
        console.error("Netwerkfout:", error);
        statusInfo.innerHTML = `<span class="status-client-error">Er is een netwerkfout opgetreden: ${error.message}</span>`;
        responseDetails.textContent = "";
      }
    });
  });
});
