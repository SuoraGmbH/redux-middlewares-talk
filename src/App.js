import TodoList from "./TodoList";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(() => {});

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
