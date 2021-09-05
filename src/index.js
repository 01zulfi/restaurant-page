import {HeaderModule} from './PageModules/HeaderModule.js';
import {HomeModule} from './PageModules/HomeModule.js'
import {MenuModule} from "./PageModules/MenuModule.js";
import {ContactModule} from './PageModules/ContactModule.js'
import './styles/style.css';
import './styles/reset.css';

const SwitchTabs = (() => {
    const switchTabsObject = {
        init: function() {
            HeaderModule.attach();
            HomeModule.attach();
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function() {
            this.pageContent = document.querySelector('#content');
            this.homeButton = document.querySelector('#homeButton');
            this.menuButton = document.querySelector('#menuButton');
            this.contactButton = document.querySelector('#contactButton');
        },
        clearPage: function() {
            this.pageContent.textContent = '';
        },
        bindEvents: function() {
            this.homeButton.addEventListener('click', () => {
                this.clearPage();
                HomeModule.attach();
            });
            this.menuButton.addEventListener('click', () => {
                this.clearPage();
                MenuModule.attach();
            });
            this.contactButton.addEventListener('click', () => {
                this.clearPage();
                ContactModule.attach();
            });
        },   
    };
    switchTabsObject.init();
})();