const HomeModule = (() => {
    const homeObject = {
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
            this.homeContent = document.createElement('div');
            this.mottoDiv = document.createElement('div');
            this.mottoText = document.createElement('p');
        },
        setId: function() {
            this.homeContent.id = 'homeContent';
            this.mottoDiv.id = 'mottoDiv';
            this.mottoText.id = 'mottoText';
        },
        setContent: function() {
            this.mottoText = 'The most succulent experience in town.';
        },
    };
    function appendContent() {
        homeObject.init();
        this.mottoDiv.append(this.mottoText);
        this.homeContent.append(this.mottoDiv);
        this.pageContent.append(this.homeContent);
    }
    const attach = appendContent.bind(homeObject);
    return {
        attach,
    }
})();

export {HomeModule};