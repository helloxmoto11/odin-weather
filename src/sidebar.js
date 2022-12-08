
const Sidebar = () => {
    const sidebar = document.createElement('div');
    sidebar.classList.add('side-bar');

    const sidebarHeader = document.createElement('div');
    sidebarHeader.classList.add('sidebar-header');
    sidebarHeader.innerText = 'Favorites';

    const favoritesList = document.createElement('ul');
    favoritesList.classList.add('favorites');

    for (let i = 0; i < 5; i++) {
        const listItem = document.createElement('li');
        const iconHolder = document.createElement('div');
        iconHolder.classList.add('icon-holder');
        iconHolder.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24">\n' +
            '    <path id="map-icon" fill="currentColor" d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />\n' +
            '</svg>';
        const favorite = document.createElement('div');
        favorite.classList.add('favorite');
        favorite.innerText = 'Dallas, TX';
        listItem.appendChild(iconHolder);
        listItem.appendChild(favorite);
        favoritesList.appendChild(listItem);
    }

    sidebar.appendChild(sidebarHeader);
    sidebar.appendChild(favoritesList);

    return sidebar;
}

export default Sidebar();