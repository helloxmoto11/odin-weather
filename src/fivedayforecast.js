import Card from "./card";
import fiveDayWeather from './data/sevendayweatherdata.js';


const FiveDayForecast = () => {
    const sevenDayForecast = document.createElement("div");
    sevenDayForecast.classList.add('five-day-forecast');

    const title = document.createElement('p');
    title.innerText = '5 Day Forecast';
    title.classList.add('title');
    sevenDayForecast.appendChild(title);

    Object.entries(fiveDayWeather).map(entry => {
        const day = entry[0];
        const temp = entry[1].temperature;

        const card = Card();
        const weatherDiv = document.createElement('div');
        weatherDiv.classList.add('weather-div');
        card.classList.add('card');
        card.classList.add('forecast-card');
        const dayP = document.createElement("p");
        dayP.innerText = day;
        const tempP = document.createElement("p");
        tempP.innerText = temp;

        card.appendChild(dayP);
        card.appendChild(tempP);
        weatherDiv.appendChild(card);

        sevenDayForecast.appendChild(weatherDiv);

    })



    return sevenDayForecast;
}


export default FiveDayForecast;