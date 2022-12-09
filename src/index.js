import "./style.css";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";
import {getWeather} from "./data/api";


const mainContent = () => {
    const root = document.createElement('div');
    root.classList.add('root');

    getWeather('Sacramento').then(wx => {
        root.appendChild(Sidebar);
        root.appendChild(MainContent(wx));
    });

    return root;
}

document.body.appendChild(mainContent());
