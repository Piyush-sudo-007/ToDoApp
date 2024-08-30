import { createContext } from "react";

const TodoItemContext = () => {
  const todoitemContext = createContext({
    todoItem: [],
    onNewList: () => {},
    ondelete: () => {},
  });
  return todoitemContext;
};

export default TodoItemContext();
