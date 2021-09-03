const HeaderModule = (() => {
    const headerObject = {
        init: function() {
            this.cacheDom();
            this.createElements();
            this.setId();
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
            this.i = document.createElement('img');
        },
        setId: function() {
            this.navButtons.id = 'navButtons';
            this.homeButton.id = 'homeButton';
            this.menuButton.id = 'menuButton';
            this.contactButton.id = 'contactButton';
            this.headerContent.id = 'header';
            this.i.src = '/src/icons/homeIcon.svg';
        },
        setContent: function() {
            this.h1.textContent = 'Savory';
            this.homeButton.textContent = 'Home';
            this.menuButton.textContent = 'Menu';
            this.contactButton.textContent = 'Contact';
        },
    };
    function appendContent() {
        headerObject.init();
        this.homeButton.append(this.i);
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