const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  nameSpace = document.querySelector(".namespace");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem("USER_LS", text);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function removeName() {
  nameSpace.classList.remove(SHOWING_CN);
  localStorage.removeItem("USER_LS");
  askForName();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  nameSpace.classList.add(SHOWING_CN);
  nameSpace.innerHTML = `Hello ${text} `;
  const delBtn = document.createElement("button");
  delBtn.innerText = "x";
  delBtn.addEventListener("click", removeName);
  nameSpace.append(delBtn);
}

function loadUserName() {
  const currentUser = localStorage.getItem("USER_LS");
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadUserName();
}

init();
