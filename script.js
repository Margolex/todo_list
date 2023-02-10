// const input = document.querySelector('.input_task');
const btnAdd = document.querySelector('.add');
const btnDelCom = document.querySelector('.delete_completed');
const btnDelAll = document.querySelector('.delete_all');
const list = document.querySelector('.list');
const textCross = document.querySelector(".cross");
const checkbox = document.querySelector(".check");
const text = document.querySelector(".input_task");
const boxDel = document.querySelector('.box_delete');

//Функция, которая рисует список задач
function addTask(event) {
    event.preventDefault();
    list.style = "display: grid";
    const boxTask = document.createElement('li');
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
    textTask.textContent = text.value;
    list.prepend(boxTask);
    boxTask.prepend(label);
    label.prepend(checkbox, textTask)
    boxTask.append(textCross);
    textCross.prepend(img);
    boxDel.style = 'display:block';

//отмечает или отменяет выполнение задачи
checkbox.addEventListener("change", () => {
textTask.classList.toggle("box_task_done");
});
    
//удаляет задачу при нажатии на крестик 
        textCross.addEventListener("click", () => {
          boxTask.style = "display: none";
        });
 }

btnAdd.addEventListener('click', addTask)

//удаляет завершенные дела
function delComplited() {
    let complited = document.querySelectorAll(".box_task_done");
//     console.log(complited)
    complited.forEach((el) => el.parentElement.parentElement.remove());
//   for (let i = 0; i < complited.length; i++) {
//     document.querySelector(".box_task").remove();
//   }
}
btnDelCom.addEventListener("click", delComplited);

//очищает список дел
function delAll() {
    const boxTask = document.querySelectorAll(".box_task"); 
    for (let i = 0; i < boxTask.length; i++) {
      boxTask[i].outerHTML = "";
    }
    list.style = "display: none";
}

btnDelAll.addEventListener("click", delAll);











