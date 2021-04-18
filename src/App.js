import TodoList from "./component/TodoList";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
