const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
 toDoList = document.querySelector(".js-toDoList");

 //filter, foreach


const TODOS_LS = "toDos";

let toDos = [];


function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();

}


function saveToDos(){
    //자바스크립트의 오브젝트를 string으로 저장
    //localStorage는 strign밖에 저장 불가능
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "✔";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = ` ${text}`;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj=
    {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue); 
    toDoInput.value ="";

}


function loadToDOs(){
const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDo = JSON.parse(loadedToDos);
        parsedToDo.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }

}

 function init(){
    loadToDOs();
    toDoForm.addEventListener("submit" , handleSubmit);
 }

 init();