import "./style.css";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";
import { getCurrentWeather } from "./data/api";

const mainContent = () => {
    const root = document.createElement('div');
    root.classList.add('root');

    root.appendChild(Sidebar);
    root.appendChild(MainContent);

    getCurrentWeather('Dallas')



    return root;
}

document.body.appendChild(mainContent());
