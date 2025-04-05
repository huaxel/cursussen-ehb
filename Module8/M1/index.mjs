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
        weatherData.innerHTML = `<p>Laatst opgehaalde temperatuur: ${temp}°C</p>`;
        cachedNotice.textContent = `(Cached data van ${new Date(timestamp).toLocaleString()})`;
    }
};

// Show loader
const showLoader = () => {
    loader.style.display = 'block';
    weatherData.innerHTML = '';
    cachedNotice.textContent = '';
};

// Hide loader
const hideLoader = () => {
    loader.style.display = 'none';
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
        
        // Update the display
        document.getElementById('weather-data').innerHTML = `
            <h2>${weatherData.name}</h2>
            <p>Temperatuur: ${temp}°C</p>
            <p>Beschrijving: ${weatherData.weather[0].description}</p>
        `;

        // Cache the data
        localStorage.setItem('weatherData', JSON.stringify({
            temp,
            timestamp: new Date().getTime()
        }));
        
        cachedNotice.textContent = '';
    } catch (error) {
        weatherData.innerHTML = `<p>Error: ${error.message}</p>`;
    } finally {
        hideLoader();
    }
};

// Event listeners
weatherButton.addEventListener('click', getWeather);

// Display cached data on page load
displayCachedWeather();