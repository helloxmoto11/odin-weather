import Card from "./card";


const FiveDayForecast = (forecast) => {
    const fiveDayForecast = document.createElement("div");
    fiveDayForecast.classList.add('five-day-forecast');

    const title = document.createElement('p');
    title.innerText = '5 Day Forecast';
    title.classList.add('title');
    fiveDayForecast.appendChild(title);

    forecast.forEach((temp, day) => {

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

        fiveDayForecast.appendChild(weatherDiv);

    })

    return fiveDayForecast;
}


export default FiveDayForecast;