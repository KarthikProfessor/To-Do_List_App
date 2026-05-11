const tasksTodo = document.getElementById("tasksTodo");
const taskField = document.getElementById("taskField");
const taskButton = document.getElementById("taskBtn");
taskButton.addEventListener("click", addTask)

function addTask() {
  let listEl = document.createElement("li");
  listEl.id = "tasks"
  
  let inputEl = document.createElement("input");
  inputEl.type = "checkbox";
  inputEl.id = "checkField";

  let spanEl = document.createElement("span");
  spanEl.id = "taskName";
  spanEl.textContent = taskField.value;

  let deleteEl = document.createElement("button");
  deleteEl.textContent = "Delete";
  deleteEl.className = "delete-btn";
  
  inputEl.addEventListener("click", () => {
    spanEl.style.textDecoration = "line-through";
  })

  
  listEl.appendChild(inputEl);
  listEl.appendChild(spanEl);
  listEl.appendChild(deleteEl)
  tasksTodo.appendChild(listEl);

  deleteEl.addEventListener("click", () => {
    tasksTodo.removeChild(listEl);
  })

  taskField.value = "";
}