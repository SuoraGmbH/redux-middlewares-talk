import { createAction } from "redux-api-middleware";

const createAppAction = ({ type, ...clientCall }) => {
  return createAction({
    method: "GET",
    headers: { "Content-Type": "application/json" },
    ...clientCall,
    endpoint: `${baseUrl}${clientCall.endpoint}`,
    types: [`${type}_PENDING`, `${type}`, `${type}_FAILED`],
  });
};

const baseUrl = "http://localhost:3001";
export const TODO_ADDED = "Todo/Added";

export const addTodo = (text) =>
  createAppAction({
    endpoint: `/todos`,
    type: TODO_ADDED,
    method: "POST",
    body: JSON.stringify({ text, completed: false }),
  });

export const TODO_UPDATED = "Todo/Updated";

export const updateTodo = (todo) =>
  createAppAction({
    endpoint: `/todos/${todo.id}`,
    method: "PUT",
    type: TODO_UPDATED,
    body: JSON.stringify(todo),
  });

export const TODO_FETCHED = "Todo/Fetched";

export const fetchTodos = () =>
  createAppAction({
    endpoint: `/todos`,
    type: TODO_FETCHED,
  });
