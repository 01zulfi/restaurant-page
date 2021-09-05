const HeaderModule = (() => {
    const headerObject = {
        init: function() {
            this.cacheDom();
            this.createElements();
            this.setId();
            this.bindEvents();
            this.setContent();
        },
        cacheDom: function() {
            this.body = document.querySelector('body');
            this.pageContent = document.querySelector('#content');
        },
        createElements: function() {
            this.headerContent = document.createElement('div');
            this.h1 = document.createElement('h1');
            this.navButtons = document.createElement('div');
            this.homeButton = document.createElement('button');
            this.menuButton = document.createElement('button');
            this.contactButton = document.createElement('button');
            this.homeIcon = document.createElement('img');
            this.menuIcon = document.createElement('img');
            this.contactIcon = document.createElement('img');
        },
        setId: function() {
            this.navButtons.id = 'navButtons';
            this.homeButton.id = 'homeButton';
            this.menuButton.id = 'menuButton';
            this.contactButton.id = 'contactButton';
            this.headerContent.id = 'header';
        },
        setContent: function() {
            this.h1.textContent = 'Savory';
            this.homeButton.textContent = 'Home';
            this.menuButton.textContent = 'Menu';
            this.contactButton.textContent = 'Contact';
            this.homeIcon.src = '/src/icons/homeIcon.svg';
            this.menuIcon.src = '/src/icons/menuIcon.svg';
            this.contactIcon.src = '/src/icons/contactIcon.svg';
        },
        toggleFocus: function() {
            if (this === window || this === headerObject.homeButton) {
                headerObject.homeButton.style.cssText = "Background-color: #B45008";
                headerObject.menuButton.style.cssText = "Background-color: transparent";
                headerObject.contactButton.style.cssText = "Background-color: transparent";
            }
            if (this === headerObject.menuButton) {
                headerObject.homeButton.style.cssText = "Background-color: transparent";
                headerObject.menuButton.style.cssText = "Background-color: #B45008";
                headerObject.contactButton.style.cssText = "Background-color: transparent";
            }
            if (this === headerObject.contactButton) {
                headerObject.homeButton.style.cssText = "Background-color: transparent";
                headerObject.menuButton.style.cssText = "Background-color: transparent";
                headerObject.contactButton.style.cssText = "Background-color: #B45008";
            }
        },
        bindEvents: function() {
            window.addEventListener('load', this.toggleFocus);
            this.homeButton.addEventListener('click', this.toggleFocus);
            this.menuButton.addEventListener('click', this.toggleFocus);
            this.contactButton.addEventListener('click', this.toggleFocus);
        }
    };
    function appendContent() {
        headerObject.init();
        this.homeButton.append(this.homeIcon);
        this.menuButton.append(this.menuIcon);
        this.contactButton.append(this.contactIcon);
        this.navButtons.append(this.homeButton, this.menuButton, this.contactButton);
        this.headerContent.append(this.h1, this.navButtons);
        this.body.insertBefore(this.headerContent, this.pageContent);
    };
    const attach = appendContent.bind(headerObject);
    return {
        attach,
    }
})();

export {HeaderModule};