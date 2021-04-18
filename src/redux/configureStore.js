import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducer";
import promise from "redux-promise-middleware";

export const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(reducer, composeEnhancers(applyMiddleware(promise)));
};
