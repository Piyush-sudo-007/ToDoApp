import styles from "./item.module.css";
import { useContext, useRef } from "react";
import { IoAddCircle } from "react-icons/io5";
import TodoItemContext from "../store/todo-item-context";

function Addtodo() {
  const todonameElement = useRef();
  const tododateElement = useRef();
  const todotimeElement = useRef();

  const { onNewList } = useContext(TodoItemContext);

  const handleAddButton = (event) => {
    event.preventDefault();
    const listname = todonameElement.current.value;
    const listdate = tododateElement.current.value;
    const listtime = todotimeElement.current.value;
    if (listname !== "" && listdate !== "" && listtime !== "") {
      onNewList(listname, listdate, listtime);
      todonameElement.current.value = "";
      tododateElement.current.value = "";
      todotimeElement.current.value = "";
    }
  };
  const handleNewAddButton = () => {
    const listname = todonameElement.current.value;
    const listdate = tododateElement.current.value;
    const listtime = todotimeElement.current.value;
    if (listname !== "" && listdate !== "" && listtime !== "") {
      onNewList(listname, listdate, listtime);
      todonameElement.current.value = "";
      tododateElement.current.value = "";
      todotimeElement.current.value = "";
    }
  };

  const additem = (event) => {
    if (event.key === "Enter") {
      handleNewAddButton();
    }
  };

  return (
    <div className="container text-center">
      <form
        className="row row-cols-1 row-cols-sm-2 row-cols-md-4"
        onSubmit={handleAddButton}
      >
        <div className={`${styles.width} picol col`}>
          {" "}
          <input
            className=" piinput"
            ref={todonameElement}
            type="text"
            placeholder="Enter your todo here"
          />
        </div>
        <div className="picol2 col">
          <input className=" piinput" type="date" ref={tododateElement} />
        </div>
        <div className={`${styles.width2} col picol2`}>
          <input
            className=" piinput"
            type="time"
            ref={todotimeElement}
            onKeyDown={additem}
          />
        </div>
        <div className={`${styles.width2} col`}>
          <button className="btn btn-success add">
            <IoAddCircle />
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
