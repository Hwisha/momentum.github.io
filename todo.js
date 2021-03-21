const toDoForm = document.querySelector(".js-toDoForm"),
  toDoList = document.querySelector(".js-toDoList"),
  toDoInput = toDoForm.querySelector("input");

const TODOS_LS = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter((element) => {
    return element.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "x";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.append(delBtn);
  li.append(span);
  li.id = newId;
  toDoList.append(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function hadnleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const lsToDos = localStorage.getItem(TODOS_LS);
  if (lsToDos !== null) {
    const parsedToDos = JSON.parse(lsToDos);
    parsedToDos.forEach((element) => {
      paintToDo(element.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", hadnleSubmit);
}

init();
