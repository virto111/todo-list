import { todosModel } from "./models.js";
import { todoTemplate } from "./views.js";

import { generateTodoTemplate } from "./utils.js";
import { createTodo, deleteTodo, saveTodo } from "./crud-methods.js";

let todos = todosModel;

const todoWrapper = document.querySelector(".todo-wrapper");
const todoInput = document.querySelector(".todo-input");

todoWrapper.innerHTML = generateTodoTemplate(todos, todoTemplate);

document.addEventListener("click", (event) => {
  if (event.target.dataset.button) {
    const eventTarget = event.target;
    const todoElement = eventTarget.closest(".todo-item");
    const dataSet = eventTarget.dataset;
    const todoId = todoElement?.dataset?.id;
    const description = todoInput?.value;
    const newDescription = eventTarget.previousElementSibling?.value;

    switch (dataSet.button) {
      case "create":
        todoInput.value = "";
        todos = createTodo(description, todos);
        todoWrapper.innerHTML = generateTodoTemplate(todos, todoTemplate);
        break;
      case "delete":
        todos = deleteTodo(todoId, todos);
        todoWrapper.innerHTML = generateTodoTemplate(todos, todoTemplate);
        break;
      case "save":
        todoElement.classList.remove("edit");
        todos = saveTodo(todoId, newDescription, todos);
        todoWrapper.innerHTML = generateTodoTemplate(todos, todoTemplate);
        break;
      case "edit":
        todoElement.classList.add("edit");
        break;
      case "discard":
        todoElement.classList.remove("edit");
        break;
    }
  }
});
