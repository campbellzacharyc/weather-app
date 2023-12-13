async function getCity(event) {
    event.preventDefault();
    try {
        const city = document.querySelector('.city').value;
        const state = document.querySelector('.state').value;
        const country = document.querySelector('.country').value;

        console.log(city);
        console.log(state);
        console.log(country);

        console.log('https://api.weatherapi.com/v1/forecast.json?key=74c0c557814f4abbbea20356232611&q=' + city + '_' + state + '_' + country + '&days=3');
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=74c0c557814f4abbbea20356232611&q=' + city + '_' + state + '_' + country + "&days=3", {mode: "cors"});
        const currentData = await response.json();
        console.log("Fetching current weather data from API....", currentData);

        const weatherToday = {
            place: currentData.location.name + ", " + currentData.location.region,
            condition: currentData.forecast.forecastday[0].day.condition.text,
            temp: Math.round(currentData.forecast.forecastday[0].day.avgtemp_f) + 'F',
            max_temp: Math.round(currentData.forecast.forecastday[0].day.maxtemp_f) + 'F',
            min_temp: Math.round(currentData.forecast.forecastday[0].day.mintemp_f) + 'F',
            humidity: currentData.forecast.forecastday[0].day.avghumidity + '%',
            wind: Math.round(currentData.current.wind_mph) + 'mph'
        }

        const weatherTomorrow = {
            place: currentData.location.name + ", " + currentData.location.region,
            condition: currentData.forecast.forecastday[1].day.condition.text,
            max_temp: Math.round(currentData.forecast.forecastday[1].day.maxtemp_f) + 'F',
            min_temp: Math.round(currentData.forecast.forecastday[1].day.mintemp_f) + 'F',
            humidity: currentData.forecast.forecastday[1].day.avghumidity + '%',
            wind: Math.round(currentData.forecast.forecastday[1].day.maxwind_mph) + 'mph'
        }

        const weatherThird = {
            place: currentData.location.name + ", " + currentData.location.region,
            condition: currentData.forecast.forecastday[2].day.condition.text,
            max_temp: Math.round(currentData.forecast.forecastday[2].day.maxtemp_f) + 'F',
            min_temp: Math.round(currentData.forecast.forecastday[2].day.mintemp_f) + 'F',
            humidity: currentData.forecast.forecastday[2].day.avghumidity + '%',
            wind: Math.round(currentData.forecast.forecastday[2].day.maxwind_mph) + 'mph'
        }
        console.log(weatherToday, weatherTomorrow, weatherThird);

        displayWeather(weatherToday, weatherTomorrow, weatherThird);
    } catch (err) {
        console.log(err);
    }
};



const searchBtn = document.querySelector('button');
searchBtn.addEventListener("click", getCity);


searchBtn.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        getCity
    }
});

async function displayWeather(weatherToday, weatherTomorrow, weatherThird) {
    // today's weather
    const displayToday = document.querySelector('.day0');
    displayToday.style.padding = '20px';

    const city = document.createElement('p');
    city.textContent = weatherToday.place + ' - Today:';
    city.style.fontWeight = 'bold';
    displayToday.appendChild(city);

    const condition = document.createElement('p');
    condition.textContent = weatherToday.condition + ', ' + weatherToday.temp + ' currently';
    displayToday.appendChild(condition);

    const maxTemp = document.createElement('p');
    maxTemp.textContent = weatherToday.max_temp + ' high';
    displayToday.appendChild(maxTemp);

    const minTemp = document.createElement('p');
    minTemp.textContent = weatherToday.min_temp + ' low';
    displayToday.appendChild(minTemp);

    const humidity = document.createElement('p');
    humidity.textContent = weatherToday.humidity + ' humidity';
    displayToday.appendChild(humidity);

    const wind = document.createElement('p');
    wind.textContent = weatherToday.wind + ' winds';
    displayToday.appendChild(wind);

    // weather tomorrow 
    const displayTomorrow = document.querySelector('.day2');
    displayTomorrow.style.padding = '20px';

    const cityTomorrow = document.createElement('p');
    cityTomorrow.textContent = weatherTomorrow.place + ' - Tomorrow:';
    cityTomorrow.style.fontWeight = 'bold';
    displayTomorrow.appendChild(cityTomorrow);

    const conditionTomorrow = document.createElement('p');
    conditionTomorrow.textContent = weatherTomorrow.condition;
    displayTomorrow.appendChild(conditionTomorrow);

    const highTempTomorrow = document.createElement('p');
    highTempTomorrow.textContent = weatherTomorrow.max_temp + ' high';
    displayTomorrow.appendChild(highTempTomorrow);

    const lowTempTomorrow = document.createElement('p');
    lowTempTomorrow.textContent = weatherTomorrow.min_temp + ' low';
    displayTomorrow.appendChild(lowTempTomorrow);

    const humidityTomorrow = document.createElement('p');
    humidityTomorrow.textContent = weatherTomorrow.humidity + ' humidity';
    displayTomorrow.appendChild(humidityTomorrow);

    const windTomorrow = document.createElement('p');
    windTomorrow.textContent = weatherTomorrow.wind + ' winds';
    displayTomorrow.appendChild(windTomorrow);

    // weather day 3
    const displayThird = document.querySelector('.day3');
    displayThird.style.padding = '20px';

    const cityThird = document.createElement('p');
    cityThird.textContent = weatherThird.place + ' - The Day After:';
    cityThird.style.fontWeight = 'bold';
    displayThird.appendChild(cityThird);

    const conditionThird = document.createElement('p');
    conditionThird.textContent = weatherThird.condition;
    displayThird.appendChild(conditionThird);

    const highTempThird = document.createElement('p');
    highTempThird.textContent = weatherThird.max_temp + ' high';
    displayThird.appendChild(highTempThird);

    const lowTempThird = document.createElement('p');
    lowTempThird.textContent = weatherThird.min_temp + ' low';
    displayThird.appendChild(lowTempThird);

    const humidityThird = document.createElement('p');
    humidityThird.textContent = weatherThird.humidity + ' humidity';
    displayThird.appendChild(humidityThird);

    const windThird = document.createElement('p');
    windThird.textContent = weatherThird.wind + ' winds';
    displayThird.appendChild(windThird);
};

