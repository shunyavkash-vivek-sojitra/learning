let todoDisplay = document.querySelector("#todoDisplay");
let todoInput = document.querySelector("#todo-input");
let btnSubmit = document.querySelector("#btnSubmit");
let btnUpdate = document.querySelector("#btnUpdate");
let date = document.querySelector("#date");

// Date
let getDate = new Date();
let dateSeperated = getDate.toString().split(" ");
date.innerHTML = `${dateSeperated[1]} / ${dateSeperated[2]} / ${dateSeperated[3]}`;

const getTodos = () => {
  return JSON.parse(localStorage.getItem("Todo")) || [];
};

const setTodos = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

let todos = [];
todos = getTodos();

// ====================================================== Create Todo
// to create new todo
const todoCreated = (e) => {
  e.preventDefault();

  // fetching data from from
  const todoNew = todoInput.value.trim();
  if (!todoNew) return;

  //  pushed "todoNew{}" into array "todos[]"
  todos.push(todoNew);
  // set array "todos[]" to localStorage
  setTodos("Todo", todos);
  // clear value of inputs at the end.
  todoInput.value = "";
  todoDisplayed();
};

// onSubmit
btnSubmit.addEventListener("click", (e) => {
  todoCreated(e);
});

// ====================================================== Display Todo
const todoDisplayed = () => {
  todos = getTodos();
  todoDisplay.innerHTML = "";
  todos.length == 0
    ? (todoDisplay.innerHTML = `<h4 class="todo-not-fount">No Todos Found</h4>`)
    : todos.forEach((todo) => {
        todoDisplay.innerHTML += `<li>
                                    <div class="todo-flex-wrap">
                                        <h4 class="todo-title text-elepse">${todo}</h4>
                                    </div>
                                    <div class="todo-flex-wrap d-flex" id="todo-flex-wrap">
                                        <button class="btnEdit" id="btnEdit">
                                            <i class="fa-solid fa-square-pen"></i>
                                        </button>
                                        <button class="btnDelete" id="btnDelete">
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                </li>`;
      });
};

// call todoDisplay
todoDisplayed();

const findIndex = (data) => {
  return todos.indexOf(data);
};

// ====================================================== Edit/Update Todo
let editTodo = (e) => {
  const selectTodo = e.target.closest("li");

  const todoText = selectTodo.querySelector(".todo-title").textContent.trim();
  todoInput.value = todoText;

  // Index Found
  let index = findIndex(todoText);
  console.log(index);

  // css
  if (index !== -1) {
    btnUpdate.dataset.index = index;
    btnSubmit.style.opacity = 0;
    btnUpdate.style.top = 0;
    btnUpdate.style.opacity = 1;
    if (todoInput.value != "") {
      btnDelete.style.display = "none";
      btnEdit.style.display = "none";
    }
  }
};

// update
let updateTodo = () => {
  let index = btnUpdate.dataset.index;
  let newData = todoInput.value;

  if (index !== undefined && index !== "" && newData !== "") {
    index = JSON.parse(index);
    todos[index] = newData;
    setTodos("Todo", todos);
    todoDisplayed();

    // index of newData in todos[]
    btnUpdate.removeAttribute("data-index");
    todoInput.value = "";
    btnSubmit.style.opacity = 1;
    btnUpdate.style.top = "50px";
    btnUpdate.style.opacity = 0;
  }
};

btnUpdate.addEventListener("click", (e) => {
  updateTodo();
});

// ====================================================== Delete Todo
// same content issue is pending to be resolved.
let deleteTodo = (e) => {
  const fetchTodo = e.target.closest("li");
  if (!fetchTodo) return;

  const id = (fetchTodo.dataset.id = Math.random());

  const todoText = fetchTodo.querySelector(".todo-title").textContent.trim();

  const todoDeleted = todos.filter((currentTodo) => {
    return currentTodo !== todoText;
  });
  setTodos("Todo", todoDeleted);
  todoDisplayed();
};

// toDeleteTodo
todoDisplay.addEventListener("click", (e) => {
  if (e.target.closest("#btnDelete")) {
    deleteTodo(e);
  }
});

// toEditTodo
todoDisplay.addEventListener("click", (e) => {
  if (e.target.closest("#btnEdit")) {
    editTodo(e);
  }
});
