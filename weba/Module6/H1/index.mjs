import { API_KEY } from "./config.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const weatherDisplay = document.getElementById("weather-display");
  const cityInput = document.getElementById("city-input");
  const searchButton = document.getElementById("search-button");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  searchButton.addEventListener("click", zoekWeer);

  function zoekWeer() {
    const stad = cityInput.value.trim();
    if (stad) {
      weatherDisplay.innerHTML = '<div class="loading">Laden...</div>';
      haalWeerop(stad);
    }
  }

  function haalWeerop(stad) {
    fetch(`${API_URL}?q=${stad}&units=metric&appid=${API_KEY}`)
      .then((response) => {
        if (!response.ok) throw new Error("Stad niet gevonden");
        return response.json();
      })
      .then((data) => {
        toonWeerData(data);
      })
      .catch((error) => {
        weatherDisplay.innerHTML = `
                    <div class="error">
                        <p>${error.message}</p>
                        <p>Probeer een andere stad of controleer de spelling</p>
                    </div>
                `;
      });
  }

  function toonWeerData(data) {
    weatherDisplay.innerHTML = `
            <div class="weather-card">
                <h2>${data.name}, ${data.sys.country}</h2>
                <p class="temperature" data-celsius="${
                  data.main.temp
                }" data-unit="C">
                    ${data.main.temp.toFixed(1)}°C
                </p>
                <p class="description">${data.weather[0].description}</p>
                <p class="humidity">Luchtvochtigheid: ${data.main.humidity}%</p>
                <p class="wind">Wind: ${data.wind.speed} m/s</p>
                <p>Zonsopgang: ${formatTime(data.sys.sunrise)}</p>
                <p>Zonsondergang: ${formatTime(data.sys.sunset)}</p>
                <button id="toggleTemp">Schakel °C/°F</button>
                <button id="addFavorite">⭐ Voeg toe aan favorieten</button>
            </div>
        `;

    document
      .getElementById("toggleTemp")
      .addEventListener("click", toggleTemperature);

    document
      .getElementById("addFavorite")
      .addEventListener("click", () => addFavorite(data.name));
  }

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function formatTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString();
  }

  function toggleTemperature() {
    const temp = document.querySelector(".temperature");
    const isCelsius = temp.dataset.unit === "C";
    const value = parseFloat(temp.dataset.celsius);

    temp.textContent = isCelsius
      ? `${celsiusToFahrenheit(value).toFixed(1)}°F`
      : `${value.toFixed(1)}°C`;

    temp.dataset.unit = isCelsius ? "F" : "C";
  }
  // Initialize favorites from localStorage or empty array
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  // Update favorites display
  function updateFavorites() {
    const favList = document.getElementById("favorites-list");
    if (favList) {
      favList.innerHTML = "";
      favorites.forEach((city) => {
        const favItem = document.createElement("div");
        favItem.classList.add("favorite-item");

        const cityButton = document.createElement("button");
        cityButton.textContent = city;
        cityButton.addEventListener("click", () => loadFavorite(city));

        const removeButton = document.createElement("button");
        removeButton.textContent = "❌";
        removeButton.style.marginLeft = "10px";
        removeButton.addEventListener("click", () => removeFavorite(city));

        favItem.appendChild(cityButton);
        favItem.appendChild(removeButton);
        favList.appendChild(favItem);
      });
    }
  }

  // Add city to favorites
  function addFavorite(city) {
    if (!favorites.includes(city)) {
      favorites.push(city);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      updateFavorites();
    }
  }

  // Remove city from favorites
  function removeFavorite(city) {
    favorites = favorites.filter((fav) => fav !== city);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavorites();
  }

  // Load weather for favorite city
  function loadFavorite(city) {
    document.getElementById("city-input").value = city;
    document.getElementById("search-button").click();
  }

  // Initial favorites display
  updateFavorites();
});
