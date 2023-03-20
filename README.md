# todo-list
간단한 투두리스트
<br>


# 📄 프로젝트 소개
할 일을 적을 수 있는 간단한 투두리스트 사이트입니다


<br>

# ⌛ 제작 기간
2022년 12월 31일
<br>

# ⚙ 사용 기술 및 라이브러리
- `HTML / CSS`
- `Javascript`

<br>

# 🛠 주요기능
<strong>1. 유저 추가</strong>
- 처음 페이지에 접속시 localStorage에 username이 있는지 확인하고 없을 경우 유저이름을 저장하는 페이지로 이동합니다
- 유저를 localStorage에 저장하면 이후 페이지에 재접속했을 경우 localStorage에서 정보를 가져와 다시 입력할 필요가 없습니다
<strong>2. Todo 추가</strong>
- `+` 버튼을 누르고 내용을 적으면 todo를 추가할 수 있습니다
- todos 배열에 localStorage에 있는 todos값들을 가져와서 사용자가 다시 접속해도 투두리스트의 투두가 유지되게 했습니다.
- `+` 버튼 클릭시 투두 작성 폼에 hidden클래스를 삭제해 css처리를 통해 폼이 뜨게 했고 폼에 투두를 작성할 수 있습니다.
<strong>3. Todo 삭제 및 수정</strong>
- edit버튼을 누르고 수정내용을 적은 후 엔터를 눌러 내용을 수정할 수 있습니다
- 수정 버튼을 클릭하면 클릭한 요소의 todoId를 받아 todos배열에서 해당 index의 값을 사용자가 넣은 값으로 바꿔서 저장하게 됩니다. 
<strong>4. Todo 체크</strong>
- Todo를 실천한 후 빈 원을 누르면 초록으로 변해 체크할 수 있습니다
- 클릭한 투두 객체에 있는 finished속성값을 변경시켜, 다시 접속했을 때도 투두 체크가 유지됩니다.
<strong>5. 프로필 변경</strong>
- 사용자는 사용자 이름, 글귀, 사진을 변경할 수 있습니다.
- 프로필 수정을 클릭하면 수정 페이지로 이동하고 수정페이지의 이름와 글귀에는 기존의 값이 자동으로 들어오고 이것을 수정할 수 있습니다.

<br>
#  🖥 사이트
https://hatbann.github.io/todo-list/todolist.html


