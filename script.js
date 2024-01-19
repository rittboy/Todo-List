const input = document.querySelector('.textarea');
const button = document.querySelector('.buttoninput');
const list = document.querySelector('.todolist');

function clickButton(e){
    e.preventDefault();
    addTodo();
}

function addTodo(){
    const itemall = document.createElement('div');
    itemall.classList.add('itemall');

    const item = document.createElement('p');
    item.classList.add('item');
    item.innerText = input.value;
    itemall.appendChild(item);

    if(input.value === '') return;

    const checkbutton = document.createElement('button');
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add("check-button");
    itemall.appendChild(checkbutton);

    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashbutton.classList.add('trash-button');
    itemall.appendChild(trashbutton);

    list.appendChild(itemall);
    input.value = '';
}

function okdel(e){
    const item = e.target;

    if(item.classList[0] === 'check-button'){
        const todolist = item.parentElement;
        todolist.classList.toggle('checklist');
    }

    if(item.classList[0] === 'trash-button'){
        const todolist = item.parentElement;
        todolist.remove();
    }
}

button.addEventListener('click', clickButton);
list.addEventListener('click', okdel);