import WeatherDetails from "./weatherdetails";
import FiveDayForecast from "./fivedayforecast";
import HourlyWeatherContent from "./hourlyweather";


function MainContent() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    mainContent.appendChild(WeatherDetails());
    mainContent.appendChild(HourlyWeatherContent());
    mainContent.appendChild(FiveDayForecast());




    return mainContent;
}

export default MainContent();