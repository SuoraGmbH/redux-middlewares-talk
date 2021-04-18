import { TODO_ADDED, TODO_FETCHED, TODO_UPDATED } from "./actions";

const initialState = {
  byId: {},
  allIds: [],
};

export const getAllTodos = (state) =>
  state.todos.allIds.map((id) => state.todos.byId[id]);

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADDED:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
        allIds: [...state.allIds, action.payload.id],
      };

    case TODO_UPDATED:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };
    case TODO_FETCHED:
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
