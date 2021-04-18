const baseUrl = "http://localhost:3001";
export const TODO_ADDED = "Todo/Added";

export const addTodo = (text) => {
  return {
    type: TODO_ADDED,
    payload: fetch(`${baseUrl}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, completed: false }),
    }).then((response) => response.json()),
  };
};

export const TODO_UPDATED = "Todo/Updated";

export const updateTodo = (todo) => {
  return {
    type: TODO_UPDATED,
    payload: fetch(`${baseUrl}/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then((response) => response.json()),
  };
};

export const TODO_FETCHED = "Todo/Fetched";

export const fetchTodos = () => {
  return {
    type: TODO_FETCHED,
    payload: fetch(`${baseUrl}/todos`).then((response) => response.json()),
  };
};
