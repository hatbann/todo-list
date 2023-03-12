const $ = (type) => {
    return document.querySelector(type);
  };

$('#checkNameBtn').addEventListener('click', (e)=>{
    let name = $('#username');
    if(name.value == ""){
        alert("이름을 입력해주세요");
    }else{
        localStorage.setItem('username', JSON.stringify(name.value));
        window.location.href = './todolist.html';
    }
})




