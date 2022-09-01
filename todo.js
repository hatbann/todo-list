const $ = (type) => {
  return document.querySelector(type);
};

const store = {
  setTodoItem: (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },
  getTodoItem: () => {
    return JSON.parse(localStorage.getItem('todos'));
  },
};

function App() {
  this.todos = [];
  this.init = () => {
    this.todos = store.getTodoItem();
    render();
  };

  const render = () => {
    const template = this.todos
      .map((todo, index) => {
        return `
      <li data-todo-id="${index}"><span id="todo_content">${todo}</span>
      <button type="button" class="todo_edit_btn">edit</button>
      <button type="button"  class="todo_remove_btn">❌</button></li>
      `;
      })
      .join('');
    $('#todo_list').innerHTML = template;
  };

  const addTodo = () => {
    const todo = $('.todo-input').value;
    this.todos.push(todo);
    store.setTodoItem(this.todos);
    render();
    $('.todo-input').value = '';
  };

  $('.todo_form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  $('#plus_icon').addEventListener('click', () => {
    $('.todo_form').classList.remove('hidden');
  });

  $('#todo_input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  });

  $('#todo_list').addEventListener('click', (e) => {
    const todoId = e.target.closest('li').dataset.todoId;
    if (e.target.classList.contains('todo_remove_btn')) {
      this.todos.splice(todoId, 1);
      store.setTodoItem(this.todos);
      render();
      return;
    }

    if (e.target.classList.contains('todo_edit_btn')) {
      const todo = this.todos[todoId];
      const editedTodo = prompt('수정하시겠습니까?', todo);
      this.todos[todoId] = editedTodo;
      store.setTodoItem(this.todos);
      render();
    }
  });

  $('.todo_input_cancel').addEventListener('click', (e) => {
    $('.todo_form').classList.add('hidden');
  });
}

const app = new App();
app.init();
