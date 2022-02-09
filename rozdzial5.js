const btn = document.getElementById('btn');
const title = document.querySelector('.title');

function getRandomColor() {
    const randomNumber = () => Math.floor(Math.random() * 10);
    return `#${randomNumber()}${randomNumber()}${randomNumber()}`;
}

btn.addEventListener('click', () => {
   title.style.color = getRandomColor();
});

const btn2 = document.getElementById('btn2');
const box = document.querySelector('.box');

btn2.addEventListener('click', () => {
    box.style.backgroundColor = getRandomColor();
});


const toggle = document.getElementById('toggle-button');
const image = document.getElementById('image');

toggle.addEventListener('click', e => {
    if (image.classList.contains('show')) {
        image.classList.remove('show');
        image.classList.add('hide');
        toggle.textContent = 'Pokaż obrazek';
    } else {
        image.classList.remove('hide');
        image.classList.add('show');
        toggle.textContent = 'Ukryj obrazek';
    }
});