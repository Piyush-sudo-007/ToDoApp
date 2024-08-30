import { useContext } from "react";
import TodoItemContext from "../store/todo-item-context";

function Welcome() {
  const { todoItem } = useContext(TodoItemContext);

  return (
    <>
      {todoItem.length === 0 && (
        <h3 className="msg">A Goal Without a plan is Just a wish</h3>
      )}
    </>
  );
}

export default Welcome;
