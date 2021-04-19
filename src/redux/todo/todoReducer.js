import { TODO_ADDED, TODO_FETCHED, TODO_UPDATED } from "./actions";

const initialState = {
  byId: {},
  allIds: [],
};

export const getAllTodos = (state) =>
  state.todos.allIds.map((id) => state.todos.byId[id]);

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Todo/Add":
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
        allIds: [...state.allIds, action.payload.id],
      };

    case "Todo/Update":
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };

    case "Todo/Fetch":
      const byId = {};
      action.payload.forEach(console.log);

      action.payload.forEach((todo) => {
        byId[todo.id] = todo;
      });

      return {
        byId: byId,
        allIds: Object.keys(byId),
      };

    default:
      return state;
  }
};
