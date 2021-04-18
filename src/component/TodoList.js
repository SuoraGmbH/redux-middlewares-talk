import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/todo/todoReducer";
import { updateTodo } from "../redux/todo/actions";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleCheckboxChange = () => {
    dispatch(
      updateTodo({
        ...todo,
        done: !todo.done,
      })
    );
  };

  return (
    <li>
      <input
        onChange={handleCheckboxChange}
        type="checkbox"
        checked={Boolean(todo.done)}
      />{" "}
      {todo.text}
    </li>
  );
};

const TodoList = () => {
  const todos = useSelector(getAllTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
