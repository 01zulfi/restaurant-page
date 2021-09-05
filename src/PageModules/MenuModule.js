const MenuModule = (() => {
    const menuObject = {
        init: function() {
            this.cacheDom();
            this.createElements();
            this.setId();
            this.setContent();
        },
        cacheDom: function() {
            this.pageContent = document.querySelector('#content');
        },
        createElements: function() {
            this.menuContent = document.createElement('div');
            this.itemA = document.createElement('div');
            this.itemB = document.createElement('div');
            this.itemC = document.createElement('div')
            this.itemD = document.createElement('div');
            this.itemE = document.createElement('div');
            this.itemAText = document.createElement('p');
            this.itemBText = document.createElement('p');
            this.itemCText = document.createElement('p');
            this.itemDText = document.createElement('p');
            this.itemEText = document.createElement('p');
        },
        setId: function() {
            this.menuContent.id = 'menuContent'
            this.itemA.id = 'itemA';
            this.itemB.id = 'itemB';
            this.itemC.id = 'itemC';
            this.itemD.id = 'itemD';
            this.itemE.id = 'itemE';
            this.itemAText.id = 'itemAText';
            this.itemBText.id = 'itemBText';
            this.itemCText.id = 'itemCText';
            this.itemDText.id = 'itemDText';
            this.itemEText.id = 'itemEText';
        },
        setContent: function() {
            this.itemAText.textContent = 'Burgers: Juicy and Thick';
            this.itemBText.textContent = 'Coffee: Prepared till perfection';
            this.itemCText.textContent = 'Seafood: Caught and served fresh';
            this.itemDText.textContent = 'Desserts: Sweat and creamy';
            this.itemEText.textContent = 'And much much more...';
        },
    };
    function appendContent() {
        menuObject.init();
        this.itemA.append(this.itemAText);
        this.itemB.append(this.itemBText);
        this.itemC.append(this.itemCText);
        this.itemD.append(this.itemDText);
        this.itemE.append(this.itemEText);
        this.menuContent.append(this.itemA, this.itemB, this.itemC, this.itemD, this.itemE);
        this.pageContent.append(this.menuContent);
    };
    const attach = appendContent.bind(menuObject);
    return {
        attach,
    }
})();

export {MenuModule};