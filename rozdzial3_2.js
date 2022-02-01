const container = document.getElementById('container');
// stworzenie elemenntu html (bez dodawania do drzewa DOM)
const text = document.createElement('p');
text.textContent = 'jakis napis';
text.id = "text-id"

text.dataset.info = 'first-dynamic-element';
text.dataset.test = 'second-dynamic-element';

// przypisanie klasy
text.className = 'css-class';
text.setAttribute('class', 'css-class');

// setAttribute używać najlepiej do customowych atrybutów
text.setAttribute("atrybut", "wartosc");
container.appendChild(text);
console.log(text.getAttribute('class'));
console.log(text.textContent);

const list = document.getElementById('list');
const newElement = document.createElement('li');
newElement.textContent = "Trzeci element";
// wstawienie elementu do drzewa DOM od razu przed zakończeniem tagu ul z id list
list.appendChild(newElement);

const newElement2 = document.createElement('li');
newElement2.textContent = "Zerowy element";
// wstawianie elementu do drzewa DOM w wyznaczone miejsce
list.insertBefore(newElement2, list.querySelector('li'));

const newElement3 = document.createElement('li');
newElement3.textContent = "Nowy element";
list.insertBefore(newElement3, list.firstChild);

const newElement4 = document.createElement('li');
newElement4.textContent = "Nowy element 2";
list.insertBefore(newElement4, list.querySelectorAll('li')[2]);

// w przypadku nie odnalezienia elementu, przed który chcielibyśmy wstawić nowy element, zostaje on wstawiony na końcu

const newElement5 = document.createElement('p');
newElement5.textContent = "przed rodzicem"
list.insertAdjacentElement('beforebegin' ,newElement5);

const newElement6 = document.createElement('li');
newElement6.textContent = "po poczatkowym tagu rodzica"
list.insertAdjacentElement('afterbegin' ,newElement6);

const newElement7 = document.createElement('li');
newElement7.textContent = "przed koncowym tagiem rodzica"
list.insertAdjacentElement('beforeend', newElement7);

const newElement8 = document.createElement('p');
newElement8.textContent = "po koncowym tagu rodzica"
list.insertAdjacentElement('afterend', newElement8);


const car_list = document.getElementById('cars');
const items = ['Ford', 'Opel', 'Audi'];
// przy każdym odświeżeniu dodaje do DOM
items.forEach(label => {
   const newElement = document.createElement('li');
   newElement.textContent = label;
    car_list.appendChild(newElement);
});

const fragment = document.createDocumentFragment();
// dodaje tylko raz do drzewa DOM po skończeniu pętli
items.forEach(label => {
   const newElement = document.createElement('li');
   newElement.textContent = label;
   fragment.appendChild(newElement);
});
car_list.appendChild(fragment);

// usuwanie elementów
const image = document.getElementById('thumbnail');
// removeChild usuwa tylko elementy rodzica, więc trzeba tutaj odwołać się do rodzica, a potem do metody removeChild
// removeChild usuwa obiekt i zwraca go, a remove jedynie usuwa
image.parentNode.removeChild(image);

// wstawianie nowego elementu w miejsce starego
const element = document.getElementById('first');
const span = document.createElement('span');
span.textContent = 'Nowy element span';
element.replaceWith(span);


// zamiana dziecka w kontenerze rodzica
const element2 = document.querySelector('span');
const paragraph = document.createElement('p');
paragraph.textContent = 'Nowy element p';
element2.parentNode.replaceChild(paragraph, element2);

// filtrowanie elementów
// konwersja do tablicy przy inicjalizacji
const number_list = [...document.querySelectorAll('#number-list li')];
// const filteredItems = [...number_list].filter(item => item.textContent.length > 6);
const filteredItems = Array.from(number_list).filter(item => item.textContent.length > 6);
console.log(`elementy o długości większej niż 6 znaków: ${filteredItems.length}`);

const article = document.getElementById('article');
// przy porównywaniu do nazw tagów trzeba pisać je dużymi literami
const paragraphs = [...article.children].filter(element => element.nodeName === 'P');
console.log(`Liczba elementów <p>: ${paragraphs.length}`)


