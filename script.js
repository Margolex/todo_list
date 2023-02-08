const input = document.querySelector('.input_task');
const btnAdd = document.querySelector('.add');
const btnDelCom = document.querySelector('.delete_completed');
const btnDelAll = document.querySelector('.delete_all');
const list = document.querySelector('.list');
const cross = document.querySelector(".cross");
const checkbox = document.querySelector(".check");
const text = document.querySelector(".input_task");
const boxDel = document.querySelector('.box_delete');


function addTask() {
    // let text = input.value;
    const boxTask = document.createElement('div');
    const checkbox = document.createElement('input');
    const textTask = document.createElement('p');
    const textCross = document.createElement('button');
    const img = document.createElement('img');
    const label = document.createElement('label');
    boxTask.className = 'box_task';
    checkbox.type = 'checkbox';
    checkbox.className = 'check';
    textTask.className = 'list_text';
    textCross.className = 'cross';
    img.src = "./❌.png";
    checkbox.addEventListener('change', () => {
    textTask.classList.toggle("box_task_done");
    });
    textCross.addEventListener('click', () => {
        boxTask.style = 'display: none';
    });
    textTask.textContent = text.value;
    list.prepend(boxTask);
    boxTask.prepend(label);
    label.prepend(checkbox, textTask)
    boxTask.append(textCross);
    textCross.prepend(img);
    boxDel.style = 'display:block';
    
}

btnAdd.addEventListener('click', addTask)








