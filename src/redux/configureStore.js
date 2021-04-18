import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

export const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
};
