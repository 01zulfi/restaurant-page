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
            this.section1 = document.createElement('div');
            this.section2 = document.createElement('div');
            this.itemA = document.createElement('div');
            this.itemB = document.createElement('div');
            this.itemC = document.createElement('div')
            this.itemD = document.createElement('div');
        },
        setId: function() {

        },
        setContent: function() {
            this.section1.textContent = "Section 1";
            this.section2.textContent = "Section 2";
            this.itemA.textContent = "Item A";
            this.itemB.textContent = 'Item B';
            this.itemC.textContent = 'Item C';
            this.itemD.textContent = 'Item D';
        },
    };
    function appendContent() {
        menuObject.init();
        this.section1.append(this.itemA, this.itemB);
        this.section2.append(this.itemC, this.itemD);
        this.menuContent.append(this.section1, this.section2);
        this.pageContent.append(this.menuContent);
    };
    const attach = appendContent.bind(menuObject);
    return {
        attach,
    }
})();

export {MenuModule};