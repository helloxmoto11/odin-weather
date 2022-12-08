import "./style.css";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";


const mainContent = () => {
    const root = document.createElement('div');
    root.classList.add('root');

    root.appendChild(Sidebar);
    root.appendChild(MainContent);




    return root;
}

document.body.appendChild(mainContent());
