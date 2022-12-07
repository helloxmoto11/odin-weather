import WeatherDetails from "./weatherdetails";


function MainContent() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    mainContent.appendChild(WeatherDetails());





    return mainContent;
}

export default MainContent();