import { use, useState } from "react"
import {v4 as uuidv4} from "uuid";
import "./TodoList.css"

export default function TodoList() {
    let [Task, setTask] = useState([{task: "Sample Task", id: uuidv4(), isDone: false}]);
    let [newTask, setNewTask] = useState("");
    let updateTaskValue = (event) =>{
        setNewTask(event.target.value);
    }

    let addNewTask = () =>{
        setTask((currentTask) =>{
            return [...currentTask, {task: newTask, id: uuidv4(), isDone: false}];
        });
        setNewTask("")
    }

    let deleteTask = (id) =>{
        setTask((prevValue) => Task.filter((prevValue) => prevValue.id != id));
    }

    let upperCaseAll = () =>{
        setTask((prevValue) => prevValue.map((todos) =>{
            return {
                ...todos,
                task: todos.task.toUpperCase()
            }
        }))
    }

    let toUpper = (id) =>{
        setTask((prevValue) =>
            prevValue.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                } else{
                    return todo;
                }
            })
        )
    }


    let markAsDone = (id) =>{
       setTask((preValue) =>{
        return preValue.map((todo) =>{
            if(todo.id === id){
                return {
                    ...todo,
                    isDone: true,
                }
            } else{
                return todo;
            }
        })
       })
    }

    let markAllAsDone = () =>{
        setTask((preValue) => preValue.map((todo) =>{
            return{
                ...todo,
                isDone: true,
            }
        }))
    }
    // return(
    //     <div className="todo-container">
    //         <input placeholder="add a task" value={newTask} onChange={updateTaskValue}></input> &nbsp;
    //         <button onClick={addNewTask}>Add Task</button> <br /> <br />
    //         <hr />
    //         <h2>Todo List</h2>
    //         <ul>
    //             {
    //                 Task.map((todoTask) => ( 
    //                     <li key={todoTask.id}>
    //                         <span style={todoTask.isDone ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{todoTask.task}</span>
    //                          &nbsp; &nbsp; &nbsp;
    //                         <button onClick={() => deleteTask(todoTask.id)}>Delete</button>
    //                         <button onClick={() => toUpper(todoTask.id)}>toUpper</button> <br /> <br />
    //                         <button onClick={() => markAsDone(todoTask.id)}>Mark As Done!</button>
    //                          <br /> <br /> <hr /> <br />
    //                     </li>
    //                 ))
    //             }
    //         </ul>

    //         <br /> <br />
    //         <button onClick={upperCaseAll}>UpperCaseAll</button>
    //         <button onClick={markAllAsDone}>Mark All As Done</button>
    //     </div>
    // )

    return (
        <div className="todo-container">
            <div className="input-section">
                <input className="task-input" placeholder="Add a task" value={newTask} onChange={updateTaskValue} />
                <button className="add-btn" onClick={addNewTask}>Add Task</button>
            </div>
    
            <h2 className="title">Todo List</h2>
            <ul className="task-list">
                {Task.map((todoTask) => (
                    <li key={todoTask.id} className="task-item">
                        <span className={todoTask.isDone ? "done" : ""}>{todoTask.task}</span>
                        <div className="btn-group">
                            <button className="delete-btn" onClick={() => deleteTask(todoTask.id)}>Delete</button>
                            <button className="upper-btn" onClick={() => toUpper(todoTask.id)}>To Upper</button>
                            <button className="done-btn" onClick={() => markAsDone(todoTask.id)}>Mark As Done</button>
                        </div>
                    </li>
                ))}
            </ul>
    
            <div className="action-buttons">
                <button className="upper-all-btn" onClick={upperCaseAll}>UpperCase All</button>
                <button className="mark-all-btn" onClick={markAllAsDone}>Mark All As Done</button>
            </div>
        </div>
    );
    
}