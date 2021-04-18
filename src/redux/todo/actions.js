export const TODO_ADDED = "Todo/Added";

export const addTodo = (text) => async (dispatch, _, baseUrl) => {
  const response = await fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, completed: false }),
  });

  const todo = await response.json();

  dispatch({
    type: TODO_ADDED,
    payload: todo,
  });
};

export const TODO_UPDATED = "Todo/Updated";

export const updateTodo = (todo) => async (dispatch, _, baseUrl) => {
  const response = await fetch(`${baseUrl}/todos/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  const updatedTodo = await response.json();

  dispatch({
    type: TODO_UPDATED,
    payload: updatedTodo,
  });
};

export const TODO_FETCHED = "Todo/Fetched";

export const fetchTodos = () => async (dispatch, _, baseUrl) => {
  const response = await fetch(`${baseUrl}/todos`);
  const data = await response.json();

  dispatch({
    type: TODO_FETCHED,
    payload: data,
  });
};
