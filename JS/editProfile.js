const $ = (type) => {
    return document.querySelector(type);
  };

  const init = () =>{
    $('#editName').value = JSON.parse( localStorage.getItem('username'));

    if(localStorage.getItem('quotes')){
        $('#editQuotes').value = JSON.parse(localStorage.getItem('quotes'));
    }else{
        $('#editQuotes').value =  "Welcome!";
    }
    
  }

  $('#cancleBtn').addEventListener('click', (e) =>{
      window.location.href = './todolist.html';
  })

  $('#editSubmitBtn').addEventListener('click', (e)=>{
      const nameValue = $('#editName').value;
      const quotesvalue =  $('#editQuotes').value;
      
      localStorage.setItem('username',JSON.stringify(nameValue) );
      localStorage.setItem('quotes', JSON.stringify(quotesvalue));
      window.location.href = './todolist.html';
  })

  init();