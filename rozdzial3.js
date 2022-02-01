// const to stała, której nie można nadpisać
const login = document.getElementById('login');  // zwróci referencję do pierwszego elementu z DOM
const login2 = document.querySelector('#login')  // pobieranie referencji do identyfikatora, za pomocą selektora CSS

const login3 = document.querySelector('.user-login-css-class');  // odwołanie do klasy
const login4 = document.querySelector('[data-user-login]');  // customowy atrybut
const login5 = document.querySelector('[data-user-info="login"]');  // customowy atrybut z określoną wartością

// pobieranie referencji na podstawie znacznika <p>
const login6 = document.querySelector('p');  // lepiej nie używać

const login7 = document.querySelector('div.parent-class p.some-class');  // p z daną klasą w środku diva z daną klasą


// przykładowe referencje do elementów listy
const items = document.querySelectorAll('#all-items li');
const items2 = document.querySelectorAll('#all-items [data-item]');
const items3 = document.querySelectorAll('li');
const items4 = document.querySelectorAll('[data-item]');

items4[0];  // referencja do pierwszego elementu listy znalezionych elementów

items4.forEach(item => console.log(item.textContent));


const list_items = Array.from(document.querySelectorAll('[data-item]'));
Array.isArray(list_items);  // zwraca true, jeżeli obiekt jest typu Array
const filteredItems = list_items.filter(item => item.textContent.includes('drugi'));
console.log(filteredItems.length);


// zawsze zwraca jakiś obiekt, który nie jest nullem - każda pusta tablica niejawnie konwertuje się do true (!)
const another_items = document.querySelectorAll('non-existing-selector');  // najlepiej korzystać z tego
if (another_items) {
    console.log("znalezione");
} else {
    console.log("nieznalezione");
}

if (another_items.length) {
    console.log("znalezione");
} else {
    console.log("nieznalezione");
}


const login8 = document.getElementsByName("login")[0];  // zwraca pierwszy element kolekcji NodeList
const login9 = document.getElementsByClassName("login-css-class")[0];  // zwraca pierwszy element kolekcji HTMLCollection
const login10 = document.getElementsByTagName("div")[0];  // zwraca pierwszy element kolekcji HTMLCollection


const selectedAgreements1 = document.querySelectorAll("#user-agreements [checked]");
console.log(selectedAgreements1.length);


// const agreementsList = document.querySelector("#user-agreements");
// const allAgreements = agreementsList.querySelectorAll('[data-agreement]');
const allAgreements = Array.from(document.querySelectorAll('[data-agreement]'));
const selectedAgreements = allAgreements.filter(item => item.checked);

console.log("wszystkie zgody " + allAgreements.length);
console.log("zaznaczone zgody " + selectedAgreements.length);

const title = document.querySelector('#title').textContent;
console.log(title);

let titleValue;

if (title) {
    titleValue = title;
    console.log(titleValue);
}