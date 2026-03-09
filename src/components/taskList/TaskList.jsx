import classNames from "classnames/bind";
import style from "./TaskList.module.css";

import TaskItem from "../taskItem/TaskItem";

const cx = classNames.bind(style);

function TaskList({
  tasks = [],
  onDeleteTask = () => {},
  onCheckTask = () => {},
}) {
  return (
    <div className={cx("task-list")}>
      {tasks.map((task, index) => {
        return (
          <TaskItem
            onCheckTask={() => {
              const type = task.isCompleted ? "unCheck" : "check";
              onCheckTask({ type, payload: index });
            }}
            onDeleteTask={() => {
              onDeleteTask({ type: "deleteTask", payload: index });
            }}
            key={index}
            taskInfor={task}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
