import WeatherDetails from "./weatherdetails";
import SevenDayForecast from "./sevendayforecast";


function MainContent() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    mainContent.appendChild(WeatherDetails());
    mainContent.appendChild(SevenDayForecast());




    return mainContent;
}

export default MainContent();