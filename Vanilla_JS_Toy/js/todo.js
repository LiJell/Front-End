const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

//local storage에 저장하기
//JSON.stringify는 모든것들을 string으로 변환해줌
// 값을 string으로 저장하고싶을 때 자주 사용
//JSON.parse를 이용하면 string을 다시 array로 만들 수 있음
//즉 JSON.stringify로 string으로 변환된 데이터를 local storage에 저장하고
//저장된 string을 불러와 다시 array로 변환시켜서 사용

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//어떤 버튼이 클리되는지 확인
//console.dir(event.target)로 console에서 parentNode or parentElement 를 확인
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  // filter을 사용해서 필요없는 것을 제외
  // filter function that I make is gonna return only true
  // so that item that return false will be excluded
  // since true = 1, false = 0
  // as a result, new array will be created, not modify old one
  // li.id 는 string이고 toDo.id는 number인 점을 console.log로 확인
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
// value 를 지운다고 newToDo 의 value 가 지워지는건 아님
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

