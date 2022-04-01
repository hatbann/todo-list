const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

let toDos = [];
let checkFlag = 0;

function saveTodosInLocal() {
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function checkTodo(event) {
  if (checkFlag) {
    event.target.innerText = '⚪';
    checkFlag = 0;
  } else {
    event.target.innerText = '🟢';
    checkFlag = 1;
  }
}

function writeInput(value) {
  const list = document.createElement('li');
  const deleteBtn = document.createElement('span');
  const checkBtn = document.createElement('span');
  list.innerText = value;
  deleteBtn.innerText = '❌';
  checkBtn.innerText = '⚪';
  checkBtn.id = 'checkBtn';
  deleteBtn.id = 'dltBtn';
  todoList.appendChild(checkBtn);
  todoList.appendChild(list);
  todoList.appendChild(deleteBtn);
  checkBtn.addEventListener('click', checkTodo);
}

function handlesubmit(event) {
  event.preventDefault();
  const newvalue = todoInput.value;
  todoInput.value = '';
  const value = {
    id: Date.now(),
    value: newvalue,
  };
  toDos.push(value);
  saveTodosInLocal();
  writeInput(newvalue);
}

todoForm.addEventListener('submit', handlesubmit);

const savedTodos = localStorage.getItem('todos');
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(writeInput);
}
