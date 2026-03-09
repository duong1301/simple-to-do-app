import classNames from "classnames/bind";
import style from "./Home.module.css";
import Board from "../../components/board/Board";
import Header from "../../components/header/Header";
import AddTask from "../../components/addTask/AddTask";
import TaskList from "../../components/taskList/TaskList";
import { useReducer } from "react";
import { createTask } from "../../helper/helper";

const cx = classNames.bind(style);

const reducer = (state, action) => {
  switch (action.type) {
    case "addTask": {
      const task = action.payload;
      const newTask = createTask(task);
      const todos = [...state, newTask];
      return todos;
    }

    case "deleteTask": {
      const id = action.payload;
      const todos = [...state];
      todos.splice(id, 1);
      return todos;
    }

    case "check":{
        const id = action.payload
        const todos = [...state]
        todos[id] = {
            ...todos[id],
            isCompleted:true
        }
                
        return todos;
    }

    case "unCheck":{
        const id = action.payload
        const todos = [...state]
        todos[id] = {
            ...todos[id],
            isCompleted:false
        }
                
        return todos;
    }



    default:
        throw new Error("action không hợp lệ")
      
  }
};

function Home() {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div className={cx("todo-container")}>
      <Board>
        <Header />
        <AddTask onAddTaks={dispatch} />
        <TaskList onCheckTask={dispatch} onDeleteTask={dispatch} tasks={state} />
      </Board>
    </div>
  );
}

export default Home;
