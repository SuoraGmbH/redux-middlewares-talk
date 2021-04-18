import { TODO_ADD, TODO_UPDATE } from "./actions";

const initialState = {
  byId: {},
  allIds: [],
};

export const getAllTodos = (state) =>
  state.todos.allIds.map((id) => state.todos.byId[id]);

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
        allIds: [...state.allIds, action.payload.id],
      };

    case TODO_UPDATE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
};
