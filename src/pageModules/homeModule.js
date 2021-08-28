const pageContent = document.querySelector('#content');
const homeContent = document.createElement('div');
const p = document.createElement('p');

homeContent.id = 'homeContent';
p.textContent = 'The most succulent experience in town.';

function appendHomePage() {
    homeContent.append(p);
    pageContent.append(homeContent);
}

export default appendHomePage;