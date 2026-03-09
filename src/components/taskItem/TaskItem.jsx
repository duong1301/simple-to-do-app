import classNames from "classnames/bind";
import style from "./TaskItem.module.css";

const cx = classNames.bind(style)

 
function TaskItem({taskInfor, onDeleteTask = ()=>{}, onCheckTask = ()=>{}}) {
    const infor = taskInfor;
    return <div className={cx("task-item",{completed:infor.isCompleted})}>
        <div className="flex">
            <span onClick={onCheckTask} className={cx("icon","check")}>&#10003;</span>
            <span className={cx("text")}>{infor?.text}</span>
        </div>
        <span onClick={onDeleteTask} className={cx("delete", "icon")}>
            &times;
        </span>
        

    </div>;
}

export default TaskItem;