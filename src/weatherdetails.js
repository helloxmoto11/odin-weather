import SunIcon from './sun-icon.png';
import CloudIcon from './cloud.png';
import MostlyCloudy from './mostlycloudy.png';
import PartlyCloudy from './partly-cloudy.png';

const WeatherDetails = () => {
    const weatherDetails = document.createElement('div');
    weatherDetails.classList.add('weather-details');

    const header = document.createElement('div');
    header.classList.add('header');


    //weather icons

    const weatherIcon = new Image();
    weatherIcon.classList.add('weather-icon');
    weatherIcon.src = SunIcon;

    const weatherIcon2 = new Image();
    weatherIcon2.classList.add('weather-icon');
    weatherIcon2.src = CloudIcon;

    const weatherIcon3 = new Image();
    weatherIcon3.classList.add('weather-icon');
    weatherIcon3.src = MostlyCloudy;

    const weatherIcon4 = new Image();
    weatherIcon3.classList.add('weather-icon');
    weatherIcon3.src = PartlyCloudy;


    header.appendChild(weatherIcon);
    header.appendChild(weatherIcon2);
    header.appendChild(weatherIcon3);
    header.appendChild(weatherIcon4);



    const highLow = document.createElement('p');
    highLow.classList.add('sub-header')
    highLow.innerText = 'High 74 / Low 65';
    const time = document.createElement('p');
    time.classList.add('sub-header')
    time.innerText = 'Tue, 1:45 PM';

    weatherDetails.appendChild(header);
    weatherDetails.appendChild(highLow);
    weatherDetails.appendChild(time);


    return weatherDetails;
}

export default WeatherDetails;