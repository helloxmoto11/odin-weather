import Sunny from './assets/sun-icon.png';

const HourlyWeatherContent = (hourlyForecast) => {
    const container = document.createElement('div');
    container.classList.add('hourly-weather-container');

    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = 'Hourly Forecast';

    container.appendChild(title);

    hourlyForecast.forEach(fc => {
        const wx = hourlyWeather(fc);
        container.appendChild(wx);
    })

    return container;
}

const hourlyWeather = (forecast) => {
    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather-div');

    const hourP = document.createElement('p');
    const tempP = document.createElement('p');
    hourP.innerText = forecast.time;
    tempP.innerHTML = forecast.temp + '&#176'    ;
    weatherDiv.appendChild(hourP);
    weatherDiv.appendChild(tempP);

    const sun = new Image();
    sun.src = Sunny;
    sun.classList.add('weather-icon-small');
    weatherDiv.appendChild(sun);

    return weatherDiv;

}

export default HourlyWeatherContent;