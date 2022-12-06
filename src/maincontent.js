import WeatherDetails from "./weatherdetails";
import Card from "./card";


function MainContent() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    mainContent.appendChild(WeatherDetails());

    mainContent.appendChild(Card());
    mainContent.appendChild(Card());



    return mainContent;
}

export default MainContent();