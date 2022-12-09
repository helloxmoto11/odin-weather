import "./style.css";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";
import {getWeather} from "./data/api";


const mainContent = () => {
    const root = document.createElement('div');
    root.classList.add('root');
    const setWeather = (city) => {
        console.log("set weather called")
        getWeather(city)
            .then((w) => {
                root.removeChild(root.lastChild);
                root.appendChild(MainContent(w, setWeather))
            })
    };


    getWeather('Houston').then(wx => {
        root.appendChild(Sidebar);
        root.appendChild(MainContent(wx, setWeather));
    });

    return root;
}


document.body.appendChild(mainContent());
