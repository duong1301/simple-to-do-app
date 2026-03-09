import classNames from "classnames/bind";
import style from "./AddTask.module.css"
import Button from '../button/Button';
import { useState } from "react";

const cx = classNames.bind(style)

function AddTask({onAddTaks = (text)=>{}}) {

    const [text, setText] = useState('')
    
    return (  
        <div className={cx("add-task")}>
            <input value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="add your task here" className={cx("input")} type="text" />
            <Button onClick={()=>{onAddTaks({type:'addTask',payload:text})}} className={cx("btn")}>Add</Button>
        </div>
    );
}

export default AddTask;