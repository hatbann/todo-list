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

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  console.log(toDos);
  saveTodosInLocal();
}

function writeInput(value) {
  const list = document.createElement('li');
  const deleteBtn = document.createElement('span');
  const checkBtn = document.createElement('span');
  list.innerText = value.value;
  deleteBtn.innerText = '❌';
  checkBtn.innerText = '⚪';
  checkBtn.id = 'checkBtn';
  deleteBtn.id = 'dltBtn';
  list.id = value.id;
  todoList.appendChild(list);
  list.insertBefore(checkBtn, list.firstChild);
  list.appendChild(deleteBtn);
  checkBtn.addEventListener('click', checkTodo);
  deleteBtn.addEventListener('click', deleteTodo);
}

function handlesubmit(event) {
  event.preventDefault();
  const value = todoInput.value;
  todoInput.value = '';
  const newvalue = {
    id: Date.now(),
    value: value,
  };
  toDos.push(newvalue);
  writeInput(newvalue);
  saveTodosInLocal();
}

todoForm.addEventListener('submit', handlesubmit);

const savedTodos = localStorage.getItem('todos');
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(writeInput);
}
