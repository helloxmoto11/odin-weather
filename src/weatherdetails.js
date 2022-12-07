import SunIcon from './assets/sun-icon.png';
import Card from "./card";


const WeatherDetails = () => {
    const weatherDetails = document.createElement('div');
    weatherDetails.classList.add('weather-details');
    weatherDetails.appendChild(weather());
    weatherDetails.appendChild(searchContent());
    weatherDetails.appendChild(recentContent());

    return weatherDetails;
}

const weather = () => {
    const forecast = document.createElement('div');
    forecast.classList.add('forecast');

    //weather icons
    const weatherIcon = new Image();
    weatherIcon.classList.add('weather-icon-large');
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

    const card = Card();
    card.classList.add('forecast-card');

    card.appendChild(iconTempContainer);
    card.appendChild(city);
    card.appendChild(highLow);
    card.appendChild(time);
    forecast.appendChild(card);
    return forecast;
}

function searchContent() {
    const searchContent = document.createElement('div');
    searchContent.classList.add('search');

    const searchLabel = document.createElement("label");
    const searchInput = document.createElement("input");
    const search = 'search';
    searchInput.id = search;
    searchLabel.htmlFor = search;
    searchLabel.innerText = "Search";
    searchInput.placeholder = 'City';

    const searchButton = document.createElement("button");
    searchButton.innerText = 'Get Weather';

    const card = Card();
    card.classList.add('search-card');
    card.appendChild(searchLabel);
    card.appendChild(searchInput);
    card.appendChild(searchButton);

    searchContent.appendChild(card);

    return searchContent;
}

const recentContent = () => {
    const recentContent = document.createElement('div');
    recentContent.classList.add('recent');
    const recentHeader = document.createElement("p");
    recentHeader.innerText = 'Recent';

    const card = Card();
    card.classList.add('recent-card');
    card.appendChild(recentHeader);
    recentContent.appendChild(card);

    return recentContent;
}

export default WeatherDetails;