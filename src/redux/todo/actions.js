const baseUrl = "http://localhost:3001";
export const TODO_ADDED = "Todo/Added";

export const addTodo = (text) => ({
  type: TODO_ADDED,
  apiPayload: {
    url: "/todos",
    method: "POST",
    body: { text, completed: false },
  },
});

export const TODO_UPDATED = "Todo/Updated";

export const updateTodo = (todo) => ({
  type: TODO_UPDATED,
  apiPayload: {
    url: `/todos/${todo.id}`,
    method: "PUT",
    body: todo,
  },
});

export const TODO_FETCHED = "Todo/Fetched";

export const fetchTodos = () => ({
  type: TODO_FETCHED,
  apiPayload: {
    url: "/todos",
  },
});
