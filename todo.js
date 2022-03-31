const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

const todos = [];
let checkFlag = 0;

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
  console.log(event);
  const newvalue = todoInput.value;
  todoInput.value = '';
  const value = {
    id: Date.now(),
    value: newvalue,
  };
  writeInput(newvalue);
}

todoForm.addEventListener('submit', handlesubmit);
