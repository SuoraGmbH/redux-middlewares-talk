export const TODO_ADDED = "Todo/Added";

export const addTodo = (text) => ({
  type: TODO_ADDED,
  payload: {
    id: Date.now(),
    text,
  },
});

export const TODO_UPDATED = "Todo/Updated";

export const updateTodo = (todo) => ({
  type: TODO_UPDATED,
  payload: todo,
});
