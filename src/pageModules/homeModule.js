const content = document.querySelector('#content');
const homeContent = document.createElement('div');
const h1 = document.createElement('h1');
const navButtons = document.createElement('div');
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');

const p = document.createElement('p');

h1.textContent = 'The Restaurant';

navButtons.id = 'navButtons';
homeButton.id = 'homeButton';
homeButton.textContent = 'Home';
menuButton.id = 'menuButton';
menuButton.textContent = 'Menu';
contactButton.id = 'contactButton';
contactButton.textContent = 'Contact';

homeContent.id = 'homeContent';
p.textContent = 'The most succulent experience in town.';

function appendHomePage() {
    navButtons.append(homeButton, menuButton, contactButton);
    homeContent.append(h1, navButtons, p);
    content.append(homeContent);
}

export default appendHomePage