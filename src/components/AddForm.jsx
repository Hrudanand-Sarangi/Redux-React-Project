import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    const[task,setTask]=useState("");
    const dispatch= useDispatch();

    const submitHandler= (evt)=>{
        evt.preventDefault();
        if (!task.trim()) return;
        dispatch(addTodo(task));
        setTask("");
    };
    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Add a task" value={task} onChange={(e)=>setTask(e.target.value)} />
            <button>Submit</button>
        </form>
        </>
    );
}