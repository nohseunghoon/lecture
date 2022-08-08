const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  const deletedId = li.querySelector("span").id;
  li.remove();

  toDos = toDos.filter(todo => {
    return todo.id !== Number(deletedId);
  });

//   toDos.forEach((todo, idx) => {
//     if (todo.id === Number(deletedId)) {
//       toDos.splice(idx, 1);
//     }
//   });
  saveToDos();
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  console.log(newTodoObj);
  span.innerText = newTodoObj.text;
  span.id = newTodoObj.id;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodoObj = {
    id: Date.now(),
    text: toDoInput.value,
  };
  toDoInput.value = "";

  toDos.push(newTodoObj);

  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;

  parsedToDos.forEach(paintToDo);
}
