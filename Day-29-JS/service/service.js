let todoDisplay = document.querySelector("#todoDisplay");
let todoInput = document.querySelector("#todo-input");
let btnSubmit = document.querySelector("#btnSubmit");

const getTodos = () => {
  return JSON.parse(localStorage.getItem("Todo")) || [];
};

const setTodos = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

console.log("Get Todos: ", getTodos());

let todos = [];
todos = getTodos();

// ====================================================== Create Todo
// to create new todo
const todoCreated = () => {
  event.preventDefault();

  // fetching data from from
  const todoNew = todoInput.value.trim();
  console.log("todoNew: ", todoNew);

  //  pushed "todoNew{}" into array "todos[]"
  todos.push(todoNew);
  // set array "todos[]" to localStorage
  setTodos("Todo", todos);
  // clear value of inputs at the end.
  todoInput.value = "";
  todoDisplayed();
};

// onSubmit
btnSubmit.addEventListener("click", () => {
  todoCreated();
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
                                  <div class="todo-flex-wrap" id="todo-flex-wrap">
                                      <button class="btnDelete">
                                         <i class="fa-solid fa-xmark"></i>
                                      </button>
                                  </div>
                              </li>`;
      });
};
// call todoDisplay
todoDisplayed();

// ====================================================== Delete Todo
let deleteTodo = (e) => {
  const fetchTodo = e.target.closest("li");
  console.log("fetched Todo: ", fetchTodo);
  // if (!fetchTodo) return;

  const todoText = fetchTodo.querySelector(".todo-title").textContent.trim();
  console.log("todo text: ", todoText);

  const todoDeleted = todos.filter((currentTodo) => {
    return currentTodo !== todoText;
  });
  console.log("updated Todos", todoDeleted);
  setTodos("Todo", todoDeleted);
  todoDisplayed();
};

// toDeleteTodo
todoDisplay.addEventListener("click", (e) => {
  if (e.target.closest(".btnDelete")) {
    deleteTodo(e);
  }
});
