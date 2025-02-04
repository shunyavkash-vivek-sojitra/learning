// to display todo
let todoDisplay = document.querySelector("#todoDisplay");

// to create new todo
let todoInput = document.querySelector("#todo-input");
let todoTextarea = document.querySelector("#todo-text-area");

let todos = [];

const getTodos = JSON.parse(localStorage.getItem("Todo"));

console.log("Get Todos: ", getTodos);

// ====================================================== Create Todo
// to create new todo
const todoCreated = () => {
  event.preventDefault();

  // fetching data from from
  const todoNew = new Object({
    todoTitle: todoInput.value,
    todoDescription: todoTextarea.value,
  });

  //  pushed "todoNew{}" into array "todos[]"
  // geteTodos might works
  todos.push(todoNew);

  // set array "todos[]" to localStorage
  localStorage.setItem("Todo", JSON.stringify(todos));

  // clear value of inputs at the end.
  todoInput.value = "";
  todoTextarea.value = "";

  // call todoDisplay
  todoDisplayed(todoNew.todoTitle, todoNew.todoDescription);
};

// ====================================================== Display Todo
const todoDisplayed = (title, description) => {
  todoDisplay.innerHTML = getTodos
    .map((todo) => {
      return `<li>
                                    <div class="todo-flex-wrap">
                                        <h4 id="todo-title">${todo.todoTitle}</h4>
                                        <p id="todo-desctiption">${todo.todoDescription}</p>
                                    </div>
                                    <div class="todo-flex-wrap">
                                        <button onclick="todoDeleted()">
                                            <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                    </div>
                                </li>`;
    })
    .join("");
};

// document.onload();
