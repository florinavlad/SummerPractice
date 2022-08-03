//Selectors
const taskInput = document.getElementById("taskInput");
const newTaskText = document.getElementById("newTaskText");
const taskList = document.getElementById("taskList");

function add() {
  const taskDiv = document.createElement("div");
  taskDiv.classList = "task";

  const taskTextDiv = document.createElement("div");
  taskTextDiv.classList = "taskText";

  const taskTextSpan = document.createElement("span");
  taskTextSpan.classList = "text";
  taskTextSpan.innerHTML = taskInput.value;

  const deleteButton = document.createElement("button");
  deleteButton.classList = "delete";
  deleteButton.innerText = "Delete";

  const eventsDiv = document.createElement("div");
  eventsDiv.classList = "events";

  eventsDiv.appendChild(deleteButton);
  taskTextDiv.appendChild(taskTextSpan);
  taskDiv.appendChild(taskTextDiv);
  taskDiv.appendChild(eventsDiv);

  taskList.appendChild(taskDiv);

  taskDiv.addEventListener("click", () => {
    taskDiv.style.backgroundColor = "black";
  });

  deleteButton.addEventListener("click", () => {
    taskDiv.remove();
  });

  taskInput.value = "";
}

function deleteTask() {
  console.log(this.outerHTML);
}
