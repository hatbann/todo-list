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
  setProfileImg: (img) => {
    localStorage.setItem('profileImg', JSON.stringify(img));
  },
  getProfileImg: () => {
    return JSON.parse(localStorage.getItem('profileImg'));
  },
  setUserName : (username) =>{
    localStorage.setItem('username', JSON.stringify(username));
  },
  getUserName : ()=>{
    return JSON.parse(localStorage.getItem('username'));
  },
  getQuotes : ()=>{
    return JSON.parse(localStorage.getItem('quotes'));
  }
};

function App() {
  this.todos = [];
  this.profileImg = 'assets/user_profile.jfif';
  this.quotes = '';
  this.username = '';

  //처음 로딩되자마자 하는 것
  this.init = () => {
    if(!store.getUserName()){
       window.location.href = './makeUser.html';
    }else{
      this.username = store.getUserName();
      if (store.getProfileImg() !== null) {
        this.profileImg = store.getProfileImg();
      }
      if (store.getTodoItem()) {
        this.todos = store.getTodoItem();
      }
      if(store.getQuotes()){
        this.quotes = store.getQuotes();
      }else{
        this.quotes = "Welcome!";
      }
  
      render();
    }
  };

  const render = () => {
    const template = this.todos
      .map((todo, index) => {
        return `
      <li data-todo-id="${index}">
        <span class="todo_check_btn">${changeBtnColor(todo.finish)}</span>  
        <span class="todo_content ${todo.finish}">${todo.todo}</span>
        <button type="button" class="todo_edit_btn">edit</button>
        <button type="button"  class="todo_remove_btn">❌</button>
      </li>
      `;
      })
      .join('');

      $('#username').innerText = this.username;
      $('#quotes').innerText = this.quotes;
    $('#todo_list').innerHTML = template;
    $('#user_img').src = `${this.profileImg}`;
    
  };

  //추가 함수
  const addTodo = () => {
    const todo = { todo: $('.todo-input').value, finish: 'unfinished' };
    this.todos.push(todo);
    store.setTodoItem(this.todos);
    render();
    $('.todo-input').value = '';
  };

  //삭제 함수
  const deleteTodo = (e, todoId) => {
    this.todos.splice(todoId, 1);
    store.setTodoItem(this.todos);
    render();
    return;
  };

  //수정함수
  const editTodo = (e, todoId) => {
    const todo = this.todos[todoId].todo;
    const editedTodo = prompt('수정하시겠습니까?', todo);
    if (editedTodo) this.todos[todoId].todo = editedTodo;
    store.setTodoItem(this.todos);
    render();
  };

  const changeBtnColor = (finish) => {
    if (finish === 'finished') {
      return '🟢';
    } else if (finish === 'unfinished') {
      return '⚪';
    }
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

  $('#editProfile').addEventListener('click', (e)=>{
    window.location.href = './editProfile.html';
  })

  //todo check btn

  $('#todo_list').addEventListener('click', (e) => {
    const todoId = e.target.closest('li').dataset.todoId;
    if (e.target.classList.contains('todo_check_btn')) {
      const todo = e.target.closest('li').querySelector('.todo_content');
      const todoBtn = e.target;
      if (todo.classList.contains('unfinished')) {
        this.todos[todoId].finish = 'finished';
      } else if (todo.classList.contains('finished')) {
        this.todos[todoId].finish = 'unfinished';
      }
      store.setTodoItem(this.todos);
      render();
    }
  });

  //삭제 및 수정, todo check btn
  $('#todo_list').addEventListener('click', (e) => {
    const todoId = e.target.closest('li').dataset.todoId;
    if (e.target.classList.contains('todo_remove_btn')) deleteTodo(e, todoId);
    if (e.target.classList.contains('todo_edit_btn')) editTodo(e, todoId);
  });

  $('.todo_input_cancel').addEventListener('click', (e) => {
    $('.todo_form').classList.add('hidden');
  });

}

const app = new App();
app.init();
