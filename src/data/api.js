const BASEURL = 'https://api.openweathermap.org/';
const API_KEY = '88854f138fea3af78357167acc7448ed'


const getCurrentWeather = async (cityName) => {

    const coordinates = await getCoordinates(cityName);
    const state = coordinates[0].state
    const city = coordinates[0].name
    const lat = coordinates[0].lat;
    const lon = coordinates[0].lon;

    const endPoint = `${BASEURL}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const response = await fetch(endPoint);
    const wx = await response.json();
    const tempF = convertKtoF(wx.main.temp).toString();
    const highTemp = convertKtoF(wx.main.temp_max);
    const lowTemp = convertKtoF(wx.main.temp_min);

    const timeStamp = wx.dt;
    const date = new Date(timeStamp * 1000);
    const timeWeatherReceived = `${convertDayOfWeek(date.getDay())}, ${date.toLocaleTimeString('en-US', {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    })}`;
    //fix this logic to match 5 day forecast
    const currentTime = `${convertDayOfWeek(date.getDay())}, ${new Date().toLocaleTimeString('en-US', {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    })}`;

    const currentWeather = {
        "city": city,
        "state": state,
        "currentTemp": tempF,
        "high": highTemp,
        "low": lowTemp,
        "currentTime": currentTime,
        "dt": timeWeatherReceived

    }

    return currentWeather;
}

const getFiveDayForecast = async (cityName) => {
    const coordinates = await getCoordinates(cityName);

    const lat = coordinates[0].lat;
    const lon = coordinates[0].lon;

    const endPoint = `${BASEURL}data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const response = await fetch(endPoint)
    const json = await response.json();
    console.log(json)

    const hourlyForecast = [];
    const fiveDayForecast = [];

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

        if (i < 7) {
            hourlyForecast.push({time: hour, temp: temp})
        }
        fiveDayForecast.push({day: weekDay, temp: temp})
    }

    console.log(hourlyForecast);
    console.log(fiveDayForecast);

}

const getCoordinates = async (cityName) => {

    const endPoint = `${BASEURL}geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    const response = await fetch(endPoint)
    const json = response.json();


    return json;
}

function convertKtoF(tempK) {
    const temp =  (1.8 * (tempK - 273) + 32).toString();
    return temp.substring(0, temp.indexOf('.'))
}

function convertDayOfWeek(day) {
    switch (day) {
        case 0:
            return 'Sun';
        case 1:
            return 'Mon';
        case 2:
            return 'Tue';
        case 3:
            return 'Wed';
        case 4:
            return 'Thu';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
    }
}

export {getCurrentWeather, getFiveDayForecast};