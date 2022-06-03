const task = document.querySelector("input");
const form =document.querySelector("form")
const ul =document.querySelector("ul")
const clearTasks = document.querySelector(".clear-tasks");
const filter = document.querySelector(".filter");

// load tasks from storage
loadTasks();

// function to start event listener
fireTheEvents();

function fireTheEvents(){

  // remove task
  ul.addEventListener("click", removeTask);
  // clear tasks
  clearTasks.addEventListener("click", clear);
  // add task & add to localStorage 
  form.addEventListener("submit", addTask);

  // Search for a task
  filter.addEventListener("keyup", filterTask);

}


// add task & add to local storage
function addTask(e){
  let tasks;
  if (localStorage.getItem("tasks") === null){
    tasks = [];
    displayTasks(task.value);
    tasks.push(task.value)
    localStorage.setItem("tasks",JSON.stringify(tasks));
    task.value = "";
    e.preventDefault();
  }else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
    displayTasks(task.value);
    tasks.push(task.value);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    task.value = "";

    e.preventDefault();
  }
  //displayTasks(task.value);

}


// remove task

function removeTask(e){
  if (e.target.className.includes("fa-trash")){
    let task, tasks;
    e.target.parentElement.parentElement.remove();
    task = e.target.parentElement.parentElement.firstElementChild.innerHTML;
    tasks = JSON.parse(localStorage.getItem("tasks"));
    index = tasks.indexOf(task);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

  }


  e.preventDefault();

}
// clear tasks
function clear(e){
  while (ul.firstElementChild != null){
    ul.firstElementChild.remove();
  }

  localStorage.clear();
  e.preventDefault();

}

// load tasks from storage to DOM
function loadTasks(){
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  try {
     tasks.forEach(function(task){
      displayTasks(task);
    }); 
  } catch (error) {
    
  }
}

// diplayTasks to the Dom
function displayTasks(task){
  const li = document.createElement("li");
  li.className = "collection-item";
  li.innerHTML = `
            <div class="task">${task}</div>
            <div class="remove-task">
              <i class="fa fa-trash"></i>
            </div>
  `
  ul.appendChild(li);
}

function filterTask(e){
  let filter = e.target.value;
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  while (ul.firstElementChild != null){
    ul.firstElementChild.remove();
  }

  
  tasks.forEach(function(task){
    if (task.includes(filter)){
      displayTasks(task);
      }
    });
}

