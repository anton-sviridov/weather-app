"use strict";

// functions
async function getWeather (city) {
    const response = await fetch(apiUrl + `&appid=${apiToken}` + `&q=${city}`);
    var data = await response.json();
    return data;
}   

function setWeather(currentWeather) {
    const currentWeatherCity = currentWeather.name;
    const currentWeatherTemperature = currentWeather.main.temp.toFixed(1);
    const currentWeatherHumidity = currentWeather.main.humidity;
    const currentWeatherWind = currentWeather.wind.speed;

    city.innerHTML = `<h2>${currentWeatherCity}</h2>`;
    temperature.innerHTML = `<h1>${currentWeatherTemperature}°C</h1>`;
    humidity.innerHTML = `<p>${currentWeatherHumidity}%</p>`;
    wind.innerHTML = `<p>${currentWeatherWind} km/h</p>`;

}


// variables
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiToken = "";

const button = document.getElementById("city-button");
const input = document.getElementById("city-input");

let city = document.getElementsByClassName("city").item(0);
let temperature = document.getElementsByClassName("temperature").item(0);
let humidity = document.getElementsByClassName("humidity").item(0);
let wind = document.getElementsByClassName("wind").item(0);


// event listener
button.addEventListener("click", async (event) => {
    event.preventDefault();
    let currentWeather = await getWeather(input.value);

    setWeather(currentWeather);
});


// currentWeather.name → 
// console.log("x.name = " + x.name);
// console.log("x.wind = " + x.wind.speed);
// console.log("x.main = " + x.main.temp);
// console.log("x.main.humidity = " + x.main.humidity);

