import TodoList from "./component/TodoList";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";
import { TodoInput } from "./component/TodoInput";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <TodoInput />
      <TodoList />
    </Provider>
  );
}

export default App;
