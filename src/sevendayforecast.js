import Card from "./card";
import wx from "./forecast.json";


const SevenDayForecast = () => {
    const sevenDayForecast = document.createElement("div");
    sevenDayForecast.classList.add('seven-day-forecast');

    const data = fetch(wx)
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            console.log(data.sevenDayForecast.sunday)
        })


    return sevenDayForecast;
}


export default SevenDayForecast;