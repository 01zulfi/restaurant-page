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
            this.contactForm = document.createElement('form');
            this.userNameLabel = document.createElement('label');
            this.userName = document.createElement('input');
            this.userEmailLabel = document.createElement('label');
            this.userEmail = document.createElement('input');
            this.textAreaLabel = document.createElement('label');
            this.textArea = document.createElement('textArea');
            this.contactInfo = document.createElement('div');
            this.contactNum = document.createElement('p');
            this.contactEmail = document.createElement('p');
        },
        setId: function() {

        },
        setContent: function() {
            this.contactNum.textContent = 'Contact us for queries, feedback and more at this number: 0123455';
            this.contactEmail.textContent = 'or reach us at my@restaurant.com';
            this.userNameLabel.textContent = 'Enter Name: ';
            this.userEmailLabel.textContent = "Enter Email: ";
            this.textAreaLabel.textContent = "Your message: ";
            this.contactContent.textContent = "You can also send us a message by filling out this form: ";
        },
    };
    function appendContent() {
        contactObject.init();
        this.contactForm.append(this.userNameLabel, this.userName, this.userEmailLabel,
             this.userEmail, this.textAreaLabel, this.textArea);
        this.contactInfo.append(this.contactNum, this.contactEmail);
        this.contactContent.append(this.contactInfo, this.contactForm);
        this.pageContent.append(this.contactContent);
    };
    const attach = appendContent.bind(contactObject);
    return {
        attach,
    }
})();

export {ContactModule};