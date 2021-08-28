const pageContent = document.querySelector('#content');
const headerContent = document.createElement('div');
const h1 = document.createElement('h1');
const navButtons = document.createElement('div');
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');

h1.textContent = 'The Restaurant';
navButtons.id = 'navButtons';
homeButton.id = 'homeButton';
homeButton.textContent = 'Home';
menuButton.id = 'menuButton';
menuButton.textContent = 'Menu';
contactButton.id = 'contactButton';
contactButton.textContent = 'Contact';

function appendHeader() {
    navButtons.append(homeButton, menuButton, contactButton);
    headerContent.append(h1, navButtons);
    pageContent.append(headerContent);
}

export default appendHeader;