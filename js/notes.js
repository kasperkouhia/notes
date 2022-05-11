const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');
const entries = document.querySelector('#entries');

const itemName = 'entries';
const entriesArray = localStorage.getItem(itemName) ? JSON.parse(localStorage.getItem(itemName)) : [];

localStorage.setItem(itemName, JSON.stringify(entriesArray));
const data = JSON.parse(localStorage.getItem(itemName));

data.forEach((entry) => addListItem(entry));

function entriesVisibility() {
    list.children.length !== 0 ? entries.className = 'visible' : entries.className = 'hidden';
}

entriesVisibility();

function addListItem(content) {
    const listItem = document.createElement('li');
    listItem.textContent = content;
    list.appendChild(listItem);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const entry = input.value;
    entriesArray.push(entry);
    localStorage.setItem(itemName, JSON.stringify(entriesArray));
    addListItem(entry);
    entriesVisibility();
    input.value = '';
});

button.addEventListener('click', function() {
    localStorage.clear();
    while (entriesArray.length > 0) entriesArray.pop();
    while (list.firstChild) list.removeChild(list.lastChild);
    entriesVisibility();
});