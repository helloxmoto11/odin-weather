import WeatherDetails from "./weatherdetails";
import FiveDayForecast from "./fivedayforecast";
import HourlyWeatherContent from "./hourlyweather";


function MainContent(weather, onSearch) {
    console.log(weather)
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    mainContent.appendChild(WeatherDetails(weather.city, weather.state, weather.currentWeather, onSearch));
    mainContent.appendChild(HourlyWeatherContent(weather.forecast.hourly));
    mainContent.appendChild(FiveDayForecast(weather.forecast.fiveDay));




    return mainContent;
}

export default MainContent;