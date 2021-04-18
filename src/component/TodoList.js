import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/todo/todoReducer";
import { updateTodo } from "../redux/todo/actions";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleCheckboxChange = () => {
    dispatch(
      updateTodo({
        ...todo,
        completed: !todo.completed,
      })
    );
  };

  return (
    <li>
      <input
        onChange={handleCheckboxChange}
        type="checkbox"
        checked={Boolean(todo.completed)}
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
