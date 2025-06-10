const loadingMessage = document.getElementById("loadingMessage");

window.addEventListener("load", () => {
  loadingMessage.textContent = "Welcome!";
  setTimeout(() => {
    loadingMessage.style.display = "none";
  }, 2000);
});