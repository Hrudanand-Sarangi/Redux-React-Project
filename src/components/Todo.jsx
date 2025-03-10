import {useSelector} from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo(){
    const todos= useSelector((state)=> state.todos);
    console.log(todos);
    const dispatch= useDispatch();

    const clickHandler=(id)=>{
        console.log("delete",id);
        dispatch(deleteTodo(id));
    };

    const okHandler=(id)=>{
        console.log("mark-as-Done",id);
        dispatch(markAsDone(id));
    };

    return(
        <div>
            <AddForm/>
            <h1>ToDo List App</h1>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}  style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.task} 
                    <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                    <button onClick={()=>okHandler(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}