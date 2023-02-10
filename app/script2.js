const form = document.querySelector("form");
const text = document.querySelector(".input_task");
const list = document.querySelector(".list");
const boxDel = document.querySelector(".box_delete");
const textCross = document.querySelector(".cross");
const boxTask = document.querySelector("li");
const checkbox = document.querySelector(".check");
const btnDelCom = document.querySelector(".delete_completed");
const btnDelAll = document.querySelector(".delete_all");
let todos = [];

if (localStorage.getItem('todos')) {
todos = JSON.parse(localStorage.getItem('todos'))
}

const renderOneTodo = (todoObj) => {
    
    const cssClass = todoObj.done ? "list_text box_task_done" : "list_text";
    const cssClassCheck = todoObj.done ? "checked" : "";

    return `<li id = '${todoObj.id}' class="box_task">
                <label>
                <input type="checkbox" class="check" ${cssClassCheck}/>
                <p class="${cssClass}">
                    ${todoObj.text} 
                </p>
                </label>
                <button class="cross" id='delete'><img src="./app/cross.png" alt="" /></button>
            </li>`;
}

const renderFromTodos = () => {
    if (todos.length == 0) {
        list.style = "display: none";
        boxDel.style = "display:none";
    }
    else {
  
        list.innerHTML = "";
        const res = []
        for (let todo of todos) {
            res.push(renderOneTodo(todo))
        }
        list.innerHTML = res.join('')
        boxDel.style = "display:block";
        list.style = "display: grid";
    }
};


renderFromTodos();

form.addEventListener("submit", addTask);
 
function addTask(event) {
  //отменяет отправку формы
  event.preventDefault();
    if (text.value !== '') {
      const textTask = text.value;

      //описываем задачу в виде объекта
      const newTask = {
        id: new Date().toISOString(),
        text: textTask,
        done: false,
      };

    //добавляем задачу в массив с задачами
    todos.push(newTask);
    renderFromTodos();
        saveToLS();
        

    //очищаем поле ввода и возвращаем фокус на него
    text.value = "";
    text.focus();
    }
}

//удаление задачи

list.addEventListener('click', deleteTask)

function deleteTask(event) {
    if (event.target.id !== 'delete') return;
    
    const parentTask = event.target.closest('li');

    //определить ID удаленной задачи
    const id = parentTask.id;
    
    //находим индекс удаленной задачи в масссиве и удаляем ее из массива 
    const index = todos.findIndex((task) => task.id == id);
    todos.splice(index, 1)
    
  
    renderFromTodos();
    saveToLS();
}

//отмечает или отменяет выполнение задачи
list.addEventListener('click', doneTask)

function doneTask(event) {
    if (event.target.className !== 'check') return;
        const parentTask = event.target.closest("li");
    
    const id = parentTask.id;
    const task = todos.find((task) => task.id == id);
    task.done = !task.done;

    const textTask = parentTask.querySelector("p");
    textTask.classList.toggle("box_task_done");
    renderFromTodos();
    saveToLS();
}

function saveToLS() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//удаляет завершенные дела
btnDelCom.addEventListener("click", delComplited);

function delComplited() {
    todos = todos.filter(el => !el.done)
    saveToLS();
    renderFromTodos();
  }

//очищает список дел
btnDelAll.addEventListener("click", delAll);
function delAll() {

    todos = [];
    saveToLS();
    renderFromTodos();
}





