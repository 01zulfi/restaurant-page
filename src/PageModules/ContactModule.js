const pageContent = document.querySelector('#content');

const contactContent = document.createElement('div');
const contactForm = document.createElement('form');
const userNameLabel = document.createElement('label');
const userName = document.createElement('input');
const userEmailLabel = document.createElement('label');
const userEmail = document.createElement('input');
const textAreaLabel = document.createElement('label');
const textArea = document.createElement('textArea');
const contactInfo = document.createElement('div');
const contactNum = document.createElement('p');
const contactEmail = document.createElement('p');

contactNum.textContent = 'Contact us for queries, feedback and more at this number: 0123455';
contactEmail.textContent = 'or reach us at my@restaurant.com';
userNameLabel.textContent = 'Enter Name: ';
userEmailLabel.textContent = "Enter Email: ";
textAreaLabel.textContent = "Your message: ";
contactContent.textContent = "You can also send us a message by filling out this form: ";


function appendContactPage() {
    contactForm.append(userNameLabel, userName, userEmailLabel, userEmail, textAreaLabel, textArea);
    contactInfo.append(contactNum, contactEmail);
    contactContent.append(contactInfo, contactForm);
    pageContent.append(contactContent);
}

export default appendContactPage;