// Maak een JavaScript bestand (script.mjs) dat een tekstbestand ophaalt van de URL: "https://jsonplaceholder.typicode.com/posts/1"
// Wanneer de gebruiker op de knop "Haal Tekst Op" klikt, moet de fetch-operatie starten
// Transformeer de JSON-response naar plaintext door de titel en body uit de response te halen en die netjes te formatteren
// Toon de geformatteerde tekst in het resultaat-div
// Zorg voor foutafhandeling. Als er iets misgaat, toon dan een vriendelijke foutmelding in het resultaat-div met de klasse 'error'

document.addEventListener("DOMContentLoaded", () => {
  const haalTekstOpButton = document.getElementById("haalTekstOp");
  const resultaatDiv = document.getElementById("resultaat");

  haalTekstOpButton.addEventListener("click", () => {
    resultaatDiv.innerHTML = "<p>Tekst wordt oghehaald...</p>";
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Netwerkfout: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        const formattedText = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
        <p><em>Post ID: ${data.id} User ID ${data.userId}</em></p>
        `;

        resultaatDiv.innerHTML = formattedText;
      })
      .catch((error) => {
        resultaatDiv.innerHTML = `<p class="error">Er is een fout opgetreden: ${error.message}</p>;
    <p>Probeer het later opnieuw</p>`;

        console.error("Fetch Error", error);
      });
  });
});
