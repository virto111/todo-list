import { uuidv4, deepClone } from "./utils.js";

const createTodo = (description, todos) => {
  let tempTodos = deepClone(todos);
  tempTodos.unshift({ id: uuidv4(), description });

  return tempTodos;
};

const deleteTodo = (id, todos) => {
  if (id) {
    let tempTodos = deepClone(todos);
    return tempTodos.filter((todo) => todo.id !== id);
  }

  return todos;
};

const saveTodo = (id, description, todos) => {
  let tempTodos = deepClone(todos);
  let todo = tempTodos.find((todo) => todo.id === id);

  if (todo) {
    todo.description = description;
  }

  return tempTodos;
};

export { createTodo, deleteTodo, saveTodo };
