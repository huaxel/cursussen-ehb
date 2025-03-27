document.addEventListener("DOMContentLoaded", () => {
  const gebruikersContainer = document.getElementById("gebruikers-container");
  const loadingMessage = document.getElementsByClassName("laad-indicator")[0];

  function createUserCard(user) {
    const kaart = document.createElement("div");
    kaart.className = "gebruiker-kaart";
    kaart.innerHTML = `
      <div class="gebruiker-naam">${user.name}</div>
      <div class="gebruiker-email">${user.email}</div>
      <div>Telefoon: ${user.phone}</div>
    `;
    return kaart;
  }

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Fout: ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        const userCard = createUserCard(user);
        gebruikersContainer.appendChild(userCard);
      });
      loadingMessage.style.display = "none";
    })
    .catch((error) => {
      console.error("Er is een fout opgetreden:", error);
      gebruikersContainer.innerHTML = `<span class="error-melding">Er is een fout opgetreden: ${error.message}</span>`;
      loadingMessage.style.display = "none";
    });
});
