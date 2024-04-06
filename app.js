// 3fbf3a87d0e7e196ed8686b3e3cb0161

// const api = "3fbf3a87d0e7e196ed8686b3e3cb0161";
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=karachi";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWeather(city){
//     const response = await fetch(apiURL + city + `&appid=${api}`)
//     var data = await response.json();
//     console.log(data);
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML =data.main.temp + "°c";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
// }
// searchBtn.addEventListener("click",()=>{
//     checkWeather(searchBox.Value);
// })



const api = "3fbf3a87d0e7e196ed8686b3e3cb0161";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiURL + city + `&appid=${api}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        checkWeather(searchBox.value);
    }
})
