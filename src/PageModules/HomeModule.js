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
            this.frontDiv = document.createElement('div');
            this.welcomeDiv = document.createElement('div');
            this.welcomeDivText1 = document.createElement('p');
            this.welcomeDivText2 = document.createElement('p');
            this.mottoDiv = document.createElement('div');
            this.mottoText = document.createElement('p');
            this.messageDiv = document.createElement('div');
            this.messageDivText1 = document.createElement('div');
            this.messageDivText2 = document.createElement('div');
        },
        setId: function() {
            this.homeContent.id = 'homeContent';
            this.frontDiv.id = 'frontDiv';
            this.welcomeDiv.id = 'welcomeDiv';
            this.welcomeDivText1.id = 'welcomeDivText1';
            this.welcomeDivText2.id = 'welcomeDivText2';
            this.mottoDiv.id = 'mottoDiv';
            this.mottoText.id = 'mottoText';
            this.messageDiv.id = 'messageDiv';
            this.messageDivText1.id = 'messageDivText1';
            this.messageDivText2.id = 'messageDivText2'
        },
        setContent: function() {
            this.welcomeDivText1.textContent = 'Welcome to';
            this.welcomeDivText2.textContent = 'Savory';
            this.mottoText.textContent = 'The most succulent experience in town.';
            this.messageDivText1.textContent = 'For the love of cooking';
            this.messageDivText2.textContent = `Cooking is art and food is our passion.
                                                From choosing the best ingredients to the
                                                presentation, everything is handled with utmost care.
                                                Check out our menu and feel free to contact us.`
        }, 
    };
    function appendContent() {
        homeObject.init();
        this.welcomeDiv.append(this.welcomeDivText1, this.welcomeDivText2);
        this.mottoDiv.append(this.mottoText);
        this.frontDiv.append(this.welcomeDiv, this.mottoDiv);
        this.messageDiv.append(this.messageDivText1, this.messageDivText2);
        this.homeContent.append(this.frontDiv, this.messageDiv);
        this.pageContent.append(this.homeContent);
    }
    const attach = appendContent.bind(homeObject);
    return {
        attach,
    }
})();

export {HomeModule};