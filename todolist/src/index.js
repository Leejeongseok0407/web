// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  finishedList = document.querySelector(".js-FinishedList");
//filter, foreach

const TODOS_LS = "toDos";
const FINISH_LS = "finsished";

let toDos = [];
let finisheds = [];

function deleteItem(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const isunChecked = li.parentNode === toDoList;
  console.log(isunChecked);

  if (isunChecked) {
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
  } else {
    finishedList.removeChild(li);
    const cleanFinished = finisheds.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    finisheds = cleanFinished;
  }
  saveToDos();
}

function moveToOther(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const isunChecked = li.parentNode === toDoList;
  if (!isunChecked) {
    btn.innerText = "⬜";
    toDoList.appendChild(li);
    filterToDo(li, isunChecked);
    const toDoObj = {
      text: li.text,
      id: parseInt(li.id)
    };
    toDos.push(toDoObj);
  } else {
    btn.innerText = "✔";
    finishedList.appendChild(li);
    filterToDo(li, isunChecked);
    const finishObj = {
      text: li.text,
      id: parseInt(li.id)
    };
    finisheds.push(finishObj);
  }
  saveToDos();
}

function filterToDo(li, isunChecked) {
  if (!isunChecked) {
    const cleanFinished = finisheds.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    finisheds = cleanFinished;
  } else {
    const cleanToDos = toDos.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
  }
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  localStorage.setItem(FINISH_LS, JSON.stringify(finisheds));
}

function paintItems(text, what) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteItem);
  checkBtn.addEventListener("click", moveToOther);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);

  if (what === "toDo") {
    const newId = toDos.length + 1;
    checkBtn.innerText = "⬜";
    li.id = newId;
    li.text = text;
    const toDoObj = {
      text: text,
      id: newId
    };

    toDos.push(toDoObj);
    toDoList.appendChild(li);
  } else if (what === "finish") {
    const newId = finisheds.length + 1;
    checkBtn.innerText = "✔";
    li.id = newId;
    li.text = text;
    const toDoObj = {
      text: text,
      id: newId
    };
    finisheds.push(toDoObj);
    finishedList.appendChild(li);
  }
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintItems(currentValue, "toDo");
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const loadedFinsish = localStorage.getItem(FINISH_LS);

  if (loadedToDos !== null) {
    const parsedToDo = JSON.parse(loadedToDos);
    parsedToDo.forEach(function (toDo) {
      paintItems(toDo.text, "toDo");
    });
  }

  if (loadedFinsish !== null) {
    const parsedToDo = JSON.parse(loadedFinsish);
    parsedToDo.forEach(function (toDo) {
      paintItems(toDo.text, "finish");
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
