import SunIcon from './sun-icon.png';

const WeatherDetails = () => {
    const weatherDetails = document.createElement('div');
    weatherDetails.classList.add('weather-details');

    const forecast = document.createElement('div');
    forecast.classList.add('forecast');

    const search = document.createElement('div');
    search.classList.add('search');

    const recent = document.createElement('div');
    recent.classList.add('recent')


    //weather icons
    const weatherIcon = new Image();
    weatherIcon.classList.add('weather-icon');
    weatherIcon.src = SunIcon;

    const currentTemperature = document.createElement("p");
    currentTemperature.classList.add('current-temp');
    currentTemperature.innerText = '77';

    const iconTempContainer = document.createElement('div');
    iconTempContainer.classList.add('icon-temp-container');
    iconTempContainer.appendChild(weatherIcon);
    iconTempContainer.appendChild(currentTemperature);


    const city = document.createElement("p");
    city.classList.add('city');
    city.innerText = "Denton, Tx";
    const highLow = document.createElement('p');
    highLow.classList.add('sub-header')
    highLow.innerText = 'High 74 / Low 65';
    const time = document.createElement('p');
    time.classList.add('sub-header')
    time.innerText = 'Tue, 1:45 PM';


    forecast.appendChild(iconTempContainer);
    forecast.appendChild(city);
    forecast.appendChild(highLow);
    forecast.appendChild(time);




    weatherDetails.appendChild(forecast);
    weatherDetails.appendChild(search);
    weatherDetails.appendChild(recent);


    return weatherDetails;
}

export default WeatherDetails;