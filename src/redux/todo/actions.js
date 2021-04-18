import { createAction } from "redux-api-middleware";

const baseUrl = "http://localhost:3001";
export const TODO_ADDED = "Todo/Added";

export const addTodo = (text) =>
  createAction({
    endpoint: `${baseUrl}/todos`,
    method: "POST",
    types: ["REQUEST", TODO_ADDED, "FAILURE"],
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, completed: false }),
  });

export const TODO_UPDATED = "Todo/Updated";

export const updateTodo = (todo) =>
  createAction({
    endpoint: `${baseUrl}/todos/${todo.id}`,
    method: "PUT",
    types: ["REQUEST", TODO_UPDATED, "FAILURE"],
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

export const TODO_FETCHED = "Todo/Fetched";

export const fetchTodos = () =>
  createAction({
    endpoint: `${baseUrl}/todos`,
    method: "GET",
    types: ["REQUEST", TODO_FETCHED, "FAILURE"],
  });
