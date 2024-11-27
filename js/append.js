const placesLists = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'Bagdad';
placesLists.appendChild(li);

const mainContainer = document.getElementById('main');
console.log(mainContainer);
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Foods List';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Milk';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Mango';
ul.appendChild(li2);
section.appendChild(ul)

mainContainer.appendChild(section);