export const addTodo = (text) => ({
  entityAction: {
    entityType: "Todo",
    action: "add",
    entity: { text, completed: false },
  },
});

export const updateTodo = (todo) => ({
  entityAction: {
    entityType: "Todo",
    action: "update",
    entity: todo,
  },
});

export const fetchTodos = () => ({
  entityAction: {
    entityType: "Todo",
    action: "fetch",
  },
});
