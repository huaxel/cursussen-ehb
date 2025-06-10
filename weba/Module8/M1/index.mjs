// Import the API key from the config file
import { API_KEY } from "./config.mjs";

// DOM elements
const weatherButton = document.getElementById('getWeather');
const weatherData = document.getElementById('weather-data');
const loader = document.getElementById('loader');
const cachedNotice = document.getElementById('cached-notice');

// Check if there's cached weather data and display it
const displayCachedWeather = () => {
    const cachedData = localStorage.getItem('weatherData');
    if (cachedData) {
        const { temp, timestamp } = JSON.parse(cachedData);
        const ageMinutes = (Date.now() - timestamp) / 60000;

        if (ageMinutes < 60) {
            weatherData.innerHTML = `<p>Laatst opgehaalde temperatuur: ${temp}°C</p>`;
            cachedNotice.textContent = `(Cached data van ${new Date(timestamp).toLocaleString()})`;
        } else {
            localStorage.removeItem('weatherData');
        }
    }
};

// Show loader
const showLoader = () => {
    loader.style.display = 'block';
    weatherButton.disabled = true;
    weatherData.innerHTML = '';
    cachedNotice.textContent = '';
};

// Hide loader
const hideLoader = () => {
    loader.style.display = 'none';
    weatherButton.disabled = false;
};

// Fetch weather data from OpenWeatherMap API
const fetchWeatherData = async (latitude, longitude) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error('Weather data could not be fetched');
    return response.json();
};

// Get weather for current location
const getWeather = async () => {
    showLoader();

    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        const weatherData = await fetchWeatherData(latitude, longitude);

        const temp = Math.round(weatherData.main.temp);

        document.getElementById('weather-data').innerHTML = `
            <h2>${weatherData.name}</h2>
            <p>Temperatuur: ${temp}°C</p>
            <p>Voelt als: ${Math.round(weatherData.main.feels_like)}°C</p>
            <p>Beschrijving: ${weatherData.weather[0].description}</p>
            <p>Wind: ${Math.round(weatherData.wind.speed)} m/s</p>
            <p>Vochtigheid: ${weatherData.main.humidity}%</p>
            <p>Gegevens opgehaald op: ${new Date().toLocaleString()}</p>
        `;

        localStorage.setItem('weatherData', JSON.stringify({
            temp,
            timestamp: new Date().getTime()
        }));

        cachedNotice.textContent = '';
    } catch (error) {
        if (error.code === error.PERMISSION_DENIED) {
            weatherData.innerHTML = `<p>Locatietoegang geweigerd. We kunnen het weer niet ophalen zonder locatie.</p>`;
        } else {
            weatherData.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    } finally {
        hideLoader();
    }
};

// Event listeners
weatherButton.addEventListener('click', getWeather);

// Display cached data on page load
displayCachedWeather();