const content = document.querySelector('#content');
const menuContent = document.createElement('div');
const section1 = document.createElement('div');
const section2 = document.createElement('div');
const itemA = document.createElement('div');
const itemB = document.createElement('div');
const itemC = document.createElement('div')
const itemD = document.createElement('div');

section1.textContent = "Section 1";
section2.textContent = "Section 2";
itemA.textContent = "Item A";
itemB.textContent = 'Item B';
itemC.textContent = 'Item C';
itemD.textContent = 'Item D';

function appendMenuPage() {
    section1.append(itemA, itemB);
    section2.append(itemC, itemD);
    menuContent.append(section1, section2);
    content.append(menuContent);
}
  
export default appendMenuPage