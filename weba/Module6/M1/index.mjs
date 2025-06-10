document.addEventListener("DOMContentLoaded", () => {
  const endpointKnoppen = document.querySelectorAll(".endpoint-knop");
  const statusInfo = document.getElementById("status-info");
  const responseDetails = document.getElementById("response-details");

  const statusDescriptions = {
    200: "OK",
    301: "Moved Permanently",
    404: "Not Found",
    500: "Server Error",
  };

  endpointKnoppen.forEach((knop) => {
    knop.addEventListener("click", async () => {
      const code = knop.dataset.code;
      statusInfo.innerHTML = "Bezig met ophalen...";
      responseDetails.textContent = "";

      try {
        const response = await fetch(`https://httpstat.us/${code}`, {
          redirect: "manual",
        });
        const statusCode = parseInt(code);

        // Determine the status category
        let statusClass;
        let statusText = response.statusText || statusDescriptions[response.status] || "Onbekende status";        let isSuccess = response.ok; // Check if the response is successful
        
        // debugging statuscodes
        console.log("Ontvangen statuscode:", response.status);

        if (statusCode >= 200 && statusCode < 300) {
          statusClass = "status-success";
        } else if (statusCode >= 300 && statusCode < 400) {
          statusClass = "status-redirect";
        } else if (statusCode >= 400 && statusCode < 500) {
          statusClass = "status-client-error";
        } else if (statusCode >= 500) {
          statusClass = "status-server-error";
        }

        console.log("Toegevoegde class:", statusClass);

        // Reset statusInfo class and apply new one
        statusInfo.className = "";
        statusInfo.classList.add(statusClass);
        statusInfo.innerHTML = `${statusText}<br>Succesvol: ${isSuccess}`;
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
