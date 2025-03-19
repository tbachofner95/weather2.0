const apiKey = '0a4271fab84a0fef786787be89aa1730';
const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={0a4271fab84a0fef786787be89aa1730}';

const locationInput = document.getElementById ('locationInput');
const searchButton = document.getElementById ('searchButton');
const locationElement = document.getElementById ('location');
const temperatureElement = document.getElementById ('temperature');
const descriptionElement = document.getElementById ('description');

searchButton.addEventListener ('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather (location);
    }
});

function fetchWeather (location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=location&appid=0a4271fab84a0fef786787be89aa1730&units=imperial`;

    fetch ('https://api.openweathermap.org/data/2.5/weather?q=location&appid=0a4271fab84a0fef786787be89aa1730&units=imperial')
    .then (response => response.json())
    
    .then (data => {
        console.log(data);
        locationElement.textContent = data.location;
        temperatureElement.textContent = data.main.temp;
        descriptionElement.textContent = data.weather[0].description;
    })
    .catch(error=> {
        console.error('Error fetching weather data:', error);
    });
}
