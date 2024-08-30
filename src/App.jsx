import Appname from "./components/appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import Welcome from "./components/welcome";
import "./App.css";
import TodoItemContext from "./store/todo-item-context";
import { useReducer } from "react";

const todoItemReducer = (currValue, action) => {
  let newTodoItem = currValue;

  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currValue,
      {
        name: action.payload.listname,
        duedate: action.payload.listdate,
        time: action.payload.listtime,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currValue.filter(
      (item) => item.name !== action.payload.listname
    );
  }
  return newTodoItem;
};

function App() {
  const [todoItem, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const onNewList = (listname, listdate, listtime) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        listname,
        listdate,
        listtime,
      },
    };
    dispatchTodoItem(newItemAction);
  };
  const ondelete = (listname) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        listname,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  return (
    <TodoItemContext.Provider
      value={{
        todoItem,
        onNewList,
        ondelete,
      }}
    >
      <center className="container">
        <Appname></Appname>
        <div className="box">
          <Addtodo></Addtodo>
          <hr />
          <Welcome></Welcome>
          <div className="main">
            <Todoitems></Todoitems>
          </div>
        </div>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
