import { useContext } from "react";
import styles from "./item.module.css";
import { MdDeleteForever } from "react-icons/md";
import TodoItemContext from "../store/todo-item-context";

function Todolist({ Listname, Listdate, Listtime }) {
  const { ondelete } = useContext(TodoItemContext);

  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 pi-row">
        <div className={`${styles.width} picol col`}>{Listname}</div>
        <div className="picol2 col">{Listdate}</div>
        <div className={`${styles.width2} col picol2`}>{Listtime}</div>
        <div className={`${styles.width2} col`}>
          {" "}
          <button
            type="button"
            className="btn btn-danger delete"
            onClick={() => ondelete(Listname)}
          >
            <MdDeleteForever /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
