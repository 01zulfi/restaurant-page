import appendHeader from './pageModules/headerModule.js';
import {HomeModule} from './pageModules/homeModule.js'
import appendMenuPage from "./pageModules/menuModule.js";
import appendContactPage from './pageModules/contactModule.js'



const SwitchTabs = (() => {
    appendHeader();
    HomeModule.attach();

    const pageContent = document.querySelector('#content');
    const homeButton = document.querySelector('#homeButton');
    const menuButton = document.querySelector('#menuButton');
    const contactButton = document.querySelector('#contactButton');

    function clearPage() {
        pageContent.textContent = '';
    }

    homeButton.addEventListener('click', () => {
        clearPage();
        HomeModule.attach();
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