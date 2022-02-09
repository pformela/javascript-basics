const name = document.getElementById('name');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => name.focus());
name.addEventListener('focus', () => console.log('Focus dla elementu name.'));


const addButton = document.getElementById('add');
const list = document.getElementById('list');
let counter = 1;
addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `Element ${++counter}`;
    const button = document.createElement('button');
    button.textContent = "Usuń";
    button.dataset.action = 'delete';
    li.appendChild(button);
    list.appendChild(li);
});

list.addEventListener('click', e => {
    if(e.target.dataset.action === 'delete') {
        e.target.parentNode.remove();
    }
});


const section = document.getElementById('section');
const btn2 = document.getElementById('btn2');
section.addEventListener('click', () => console.log('Kliknieto: section'));
btn2.addEventListener('click', e => {
    // e.stopImmediatePropagation();  // blokluje fazę bąbelkowania, wywołuje się tylko poniższe
    e.stopPropagation();
    console.log('Kliknieto: button - 1');
});
btn2.addEventListener('click', e => {
    console.log('Kliknieto: button - 2');
});


const list2 = document.getElementById('list2');
list2.addEventListener('click', e => {
    console.log(`target: ${e.target.id}`);
    console.log(`currentTarget: ${e.currentTarget.id}`);
});