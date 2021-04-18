import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/actions";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") {
      // do not add empty todos
      return;
    }
    dispatch(addTodo(todoText));
    setTodoText("");
  };
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Todo…"
        onChange={handleChange}
        value={todoText}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
