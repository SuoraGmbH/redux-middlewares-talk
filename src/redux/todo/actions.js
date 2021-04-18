export const TODO_ADD = "Todo/Add";

export const addTodo = (text) => ({
  type: TODO_ADD,
  payload: {
    id: Date.now(),
    text,
  },
});

export const TODO_UPDATE = "Todo/Update";

export const updateTodo = (todo) => ({
  type: TODO_UPDATE,
  payload: todo,
});
