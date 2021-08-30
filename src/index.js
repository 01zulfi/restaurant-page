import {HeaderModule} from './PageModules/HeaderModule.js';
import {HomeModule} from './PageModules/HomeModule.js'
import {MenuModule} from "./PageModules/MenuModule.js";
import {ContactModule} from './PageModules/ContactModule.js'



const SwitchTabs = (() => {
    HeaderModule.attach();
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
        MenuModule.attach();
    })
    contactButton.addEventListener('click', () => {
        clearPage();
        ContactModule.attach();
    })


})();