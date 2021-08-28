import appendHeader from './pageModules/headerModule.js';
import appendHomePage from './pageModules/homeModule.js'
import appendMenuPage from "./pageModules/menuModule.js";
import appendContactPage from './pageModules/contactModule.js'




const SwitchTabs = (() => {
    appendHeader();
    appendHomePage();

    const pageContent = document.querySelector('#content');
    const homeButton = document.querySelector('#homeButton');
    const menuButton = document.querySelector('#menuButton');
    const contactButton = document.querySelector('#contactButton');

    function clearPage() {
        pageContent.textContent = '';
    }

    homeButton.addEventListener('click', () => {
        clearPage();
        appendHomePage();
    })
    menuButton.addEventListener('click', () => {
        clearPage();
        appendMenuPage();
    })
    contactButton.addEventListener('click', () => {
        clearPage();
        appendContactPage();
    })


})();