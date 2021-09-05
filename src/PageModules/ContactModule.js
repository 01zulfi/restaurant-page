const ContactModule = (() => {
    const contactObject = {
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
            this.contactContent = document.createElement('div');
            this.contactMessageDiv = document.createElement('div');
            this.contactMessageText = document.createElement('p');
            this.contactInfo = document.createElement('div');
            this.contactInfoText1 = document.createElement('p');
            this.contactDirect = document.createElement('div');
            this.contactNum = document.createElement('p');
            this.contactEmail = document.createElement('p');
            this.contactInfoText2 = document.createElement('p');
            this.contactForm = document.createElement('form');
            this.userNameLabel = document.createElement('label');
            this.userName = document.createElement('input');
            this.userEmailLabel = document.createElement('label');
            this.userEmail = document.createElement('input');
            this.textAreaLabel = document.createElement('label');
            this.textArea = document.createElement('textArea');
            this.submitButton = document.createElement('button')
        },
        setId: function() {
            this.contactContent.id = 'contactContent';
            this.contactMessageDiv.id = 'contactMessageDiv';
            this.contactMessageText.id = 'contactMessageText';
            this.contactInfo.id = 'contactInfo';
            this.contactInfoText1.id = 'contactInfoText1';
            this.contactInfoText2.id = 'contactInfoText2';
            this.contactDirect.id = 'contactDirect';
            this.contactForm.id = 'contactForm';
            this.submitButton.type = 'submit';
        },
        setContent: function() {
            this.contactMessageText.textContent = 'Get in touch with us';
            this.contactInfoText1.textContent = 'Contact us directly at'
            this.contactNum.textContent = '00 123 456 789';
            this.contactEmail.textContent = 'savory@restaurant.com';
            this.contactInfoText2.textContent = 'Or fill out this form';
            this.userNameLabel.textContent = 'Name: ';
            this.userEmailLabel.textContent = "Email: ";
            this.textAreaLabel.textContent = "Your message: ";
            this.submitButton.textContent = 'Send';
        },
    };
    function appendContent() {
        contactObject.init();
        this.contactMessageDiv.append(this.contactMessageText);
        this.contactForm.append(this.userNameLabel, this.userName, this.userEmailLabel,
                                this.userEmail, this.textAreaLabel, this.textArea, this.submitButton);
        this.contactDirect.append(this.contactNum, this.contactEmail);
        this.contactInfo.append(this.contactInfoText1, this.contactDirect, this.contactInfoText2,
                                this.contactForm);
        this.contactContent.append(this.contactMessageDiv, this.contactInfo);
        this.pageContent.append(this.contactContent);
    };
    const attach = appendContent.bind(contactObject);
    return {
        attach,
    }
})();

export {ContactModule};