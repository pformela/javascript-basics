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

