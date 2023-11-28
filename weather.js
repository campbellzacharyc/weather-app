// async function getWeather() {
//     const response = await fetch('https://api.weatherapi.com/v1/current.json?key=74c0c557814f4abbbea20356232611&q=');
//     const weatherData = await response.json();
//     console.log(weatherData);
// }

async function getCity() {
    try {
        const city = document.querySelector('.city').value;
        const state = document.querySelector('.state').value;
        const country = document.querySelector('.country').value;
        console.log("poop");
        console.log(city);
        console.log(state);
        console.log(country);
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=74c0c557814f4abbbea20356232611&q=' + city + '_' + state + '_' + country, {mode: "cors"});
        const weatherData = await response.json();
        console.log("Fetching current weather data from API....", weatherData);
        return weatherData;
    } catch (err) {
        return console.log(err);
    }
};

const searchBtn = document.querySelector('button');
searchBtn.addEventListener("click", getCity);


async function displayWeather () {

} 

