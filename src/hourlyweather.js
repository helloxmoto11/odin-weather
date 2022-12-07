import Sunny from './assets/sun-icon.png';

const HourlyWeatherContent = () => {
    const container = document.createElement('div');
    container.classList.add('hourly-weather-container');

    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = 'Hourly';

    container.appendChild(title);

    //For testing purposes.
    for (let i = 0; i < 7; i++) {
        const wx = hourlyWeather();
        container.appendChild(wx);


    }


    return container;
}

const hourlyWeather = () => {
    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather-div');

    const hour = '3 PM';
    const temp = '78';

    const hourP = document.createElement('p');
    const tempP = document.createElement('p');
    hourP.innerText = hour;
    tempP.innerHTML = temp + '&#176'    ;
    weatherDiv.appendChild(hourP);
    weatherDiv.appendChild(tempP);

    const sun = new Image();
    sun.src = Sunny;
    sun.classList.add('weather-icon-small');
    weatherDiv.appendChild(sun);

    return weatherDiv;

}

export default HourlyWeatherContent;