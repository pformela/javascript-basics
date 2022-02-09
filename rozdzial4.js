const button = document.getElementById("btn");
// button.addEventListener('click', () => {
//     alert("Kliknięto w przycisk!");
// });

// function clickHandler() {
//     alert("Kliknieto w przycisk!")
// };
//
// button.addEventListener('click', clickHandler);  // trzeba przekazać referencje do funkcji, a nie ją wywołać

button.onclick = () => console.log("Kliknieto w przycisk");
button.onclick = () => console.log("Druga funkcja dla zdarzenia click");  // ta funkcja nadpisała powyższą

// event listener pozwala dodawać wiele funkcji
button.addEventListener('click', () => console.log("Pierwsza funkcja z event listenera"));
button.addEventListener('click', () => console.log("Druga funkcja z event listenera"));


// ignorowanie nasłuchiwania
// function clickHandler2() {
//     alert("Kliknieto w przycisk!");
//     button.removeEventListener('click', clickHandler2);
// }

// button.addEventListener('click', clickHandler2);

button.addEventListener('click', event => {
    console.log(event.target.textContent);
});

button.addEventListener('click', event => {
   event.target.style.backgroundColor = 'red';
});

button.addEventListener('click', e => {
   console.log(`Pozycja myszki: ${e.clientX}, ${e.clientY}`);
});


const selected = document.getElementById('selected');
const list = document.getElementById('list');
list.addEventListener('click', e => {
    const el = e.target;
    selected.textContent = el.nodeName === "LI" ? el.textContent : "";
});

// Dotyczy tylko elementów HTML i tworzenia drzewa DOM
window.addEventListener("DOMContentLoaded", () => {
   console.log("DOM został wyrenderowany");
});

// Dotyczy załadowania wszystkich elementów np. obrazki czy filmy (najczęściej używane do dyanmicznego dodawanbia obrazków)
window.addEventListener("load", () => {
    console.log("Wczytano wszystkie elementy strony");
});


const form = document.getElementById("form");
form.addEventListener('submit', e => {
    e.preventDefault();
    if(isFormValid()) {
        // wysłanie formularza
    } else {
        alert('Formularz zawiera błędy!');
    }
});

const link = document.getElementById('link');
link.addEventListener('click', e => {
    console.log('Kliknięto w link');
});

// mouse
const container = document.getElementById('container2');
const mouseEnterCounter = document.getElementById('mouseenter');
const mouseOverCounter = document.getElementById('mouseover');
const mouseLeaveCounter = document.getElementById('mouseleave');
const mouseOutCounter = document.getElementById('mouseout');

container.addEventListener('mouseenter', e => {
    const actual = Number(mouseEnterCounter.textContent);
    mouseEnterCounter.textContent = actual + 1;
});

container.addEventListener('mouseover', e => {
    const actual = Number(mouseOverCounter.textContent);
    mouseOverCounter.textContent = actual + 1;
});

container.addEventListener('mouseleave', e => {
    const actual = Number(mouseLeaveCounter.textContent);
    mouseLeaveCounter.textContent = actual + 1;
});

container.addEventListener('mouseout', e => {
    const actual = Number(mouseOutCounter.textContent);
    mouseOutCounter.textContent = actual + 1;
});


// dynamiczne tworzenie obrazków
const body = document.body;

function addImage(imageSrc) {
    const img = new Image();
    img.src = imageSrc;

    img.addEventListener('load', e => {
        body.appendChild(img);
    });

    img.addEventListener('error', e => {
       const errorMessage = document.createElement('p');
       errorMessage.textContent = 'Błąd wczytywania obrazka';
       body.appendChild(errorMessage);
    });
}
addImage('https://Xsource.unsplash.com/random/1');
addImage('https://source.unsplash.com/random/1');
