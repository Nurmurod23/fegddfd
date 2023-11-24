const button = document.getElementById("todo-button");
const input = document.getElementById("todo-input");
const add = document.getElementById("todo-add");
const list = document.getElementById("todo-list");

function createTodo() {
  input.hidden = false;
  add.hidden = false;
  input.focus();
}

function addTodo() {
  const todo = input.value;
  input.hidden = true;
  add.hidden = true;
  input.value = "";
  const li = document.createElement("li");
  li.textContent = todo;
  const remove = document.createElement("button");
  remove.textContent = "Yoq qilish";
  remove.className = "todo-remove";
  function removeTodo() {
    list.removeChild(li);
    list.removeChild(remove);
  }
  remove.addEventListener("click", removeTodo);
  list.appendChild(li);
  list.appendChild(remove);
}

button.addEventListener("click", createTodo);
add.addEventListener("click", addTodo);

