import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/todo/todoReducer";
import { fetchTodos, updateTodo } from "../redux/todo/actions";
import { useEffect } from "react";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
