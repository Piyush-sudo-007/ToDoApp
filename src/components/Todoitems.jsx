import { useContext } from "react";
import TodoItemContext from "../store/todo-item-context";
import Todolist from "./Todolist";

const Todoitems = () => {
  const contextObj = useContext(TodoItemContext);
  const todoItem = contextObj.todoItem;

  return (
    <div className="items-container">
      {todoItem.map((item) => (
        <Todolist
          key={item.name}
          Listname={item.name}
          Listdate={item.duedate}
          Listtime={item.time}
        ></Todolist>
      ))}
    </div>
  );
};

export default Todoitems;
