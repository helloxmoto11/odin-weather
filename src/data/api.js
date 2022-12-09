import {API_KEY} from "./apikey.js";

const BASEURL = 'https://api.openweathermap.org/';

const getCurrentWeather = async (cityName) => {


    const coordinates = await getCoordinates(cityName);
    console.log({"coordinates": coordinates})
    const state = coordinates.state
    const city = coordinates.name
    const lat = coordinates.lat;
    const lon = coordinates.lon;

    const endPoint = `${BASEURL}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const response = await fetch(endPoint);
    const wx = await response.json();

    const tempF = convertKtoF(wx.main.temp).toString();
    const highTemp = convertKtoF(wx.main.temp_max);
    const lowTemp = convertKtoF(wx.main.temp_min);

    const date = new Date();

    const currentTime =
        `${date.toLocaleDateString('en-US', {
            weekday: "long"
        })},
         ${new Date().toLocaleTimeString('en-US', {
            hour: "numeric",
            minute: "numeric",
            hour12: true
        })}`;

    return {
        "city": city,
        "state": state,
        "currentTemp": tempF,
        "high": highTemp,
        "low": lowTemp,
        "currentTime": currentTime,
    };
}

const getForecast = async (cityName) => {
    const coordinates = await getCoordinates(cityName);

    const lat = coordinates.lat;
    const lon = coordinates.lon;

    const endPoint = `${BASEURL}data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const response = await fetch(endPoint)
    const json = await response.json();

    const hourlyForecast = [];
    const fiveDayForecast = new Map();

    const today = new Date().toLocaleDateString('en-US', {weekday: "long"})
    console.log(today)

    //Todo implement sorted set here....
    for (let i = 0; i < json.list.length; i++) {
        const item = json.list[i]
        const time = new Date(item.dt * 1000)
        const temp = convertKtoF(item.main.temp);
        const weekDay = time.toLocaleDateString('en-US', {
            weekday: "long"
        })
        const hour = time.toLocaleTimeString('en-US', {
            hour: "numeric",
            hour12: true
        })

        //Add first seven forecasts' to hourlyForecast.
        if (i < 7) {
            hourlyForecast.push({time: hour, temp: temp})
        }

        //if forecast is today skip to tomorrow.
        if (weekDay === today) continue;

        //Add the greatest temp to map.
        if (!fiveDayForecast.has(weekDay)) {
            fiveDayForecast.set(weekDay, temp);
            continue;
        }
        if (temp > fiveDayForecast.get(weekDay)) {
            fiveDayForecast.set(weekDay,temp)
        }
    }

    const forecast = {
        hourly: hourlyForecast,
        fiveDay: Array.from(fiveDayForecast)
    }

    console.log({"Forecast": forecast});

    return forecast;
}

const getCoordinates = async (cityName) => {

    const endPoint = `${BASEURL}geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    const response = await fetch(endPoint)
    const json = await response.json();


    return json[0];
}

function convertKtoF(tempK) {
    const temp = (1.8 * (tempK - 273) + 32).toString();
    return temp.substring(0, temp.indexOf('.'))
}

export {getCurrentWeather, getForecast};