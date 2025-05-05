import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function LudoBoard2 (){
    let [Task, setTask] = useState([{task: "Sample Task", id: uuidv4(), isDone: false}]);
    let [newTask, setNewTask] = useState("");

    let newTaskChange = (e) =>{
        setNewTask(e.target.value)
    }

    let addTask = () =>{
        setTask((currentValue) =>{
            return [...currentValue, {task: newTask, id: uuidv4(), isDone: false}]
        })
        setNewTask("")
    }

    let deleteTask = (id) =>{
        setTask((preValue) => Task.filter((preValue) => preValue.id != id))
    }

    let allUpperCase = () =>{
        setTask((preValue) => preValue.map((todo) =>{
           return {...todo, task: todo.task.toUpperCase()}
        }))
    }

    let oneUpperCase = (id) =>{
        setTask((preValue) =>
            preValue.map((todo) =>{
                if(todo.id == id){
                    return {...todo, task: todo.task.toUpperCase()}
                } else return todo;
            })
        )
    }

    let taskDone = (isDone) =>{
        setTask((preValue) => 
            preValue.map((todo) =>{
                if(todo.isDone == isDone){
                    return {...todo, isDone: true}
                } else return todo;
            })
        )
    }
    let styles = {
        textDecoration : "line-through" 
    }
    return(
        <div>
            <input type="text" placeholder="Add Text" value={newTask} onChange={newTaskChange}/> &nbsp;  <button onClick={addTask}>Add Task</button>
             <br /> <br />
            <hr />
            <h2>Todo List</h2>
            <ul>
                {
                    Task.map((todo) => {
                        return <li key={todo.id}>{todo.isDone? <span style={styles}>{todo.task}</span> : <span>{todo.task}</span>} 
                        <button onClick={() => deleteTask(todo.id)}>Delete</button> 
                        <button onClick={() => oneUpperCase(todo.id)}>UpperCase</button>
                        <button onClick={() => taskDone(todo.isDone)}>Mark Task</button>
                        </li>
                    })
                } <br /> <br /> <br />
                <button onClick={allUpperCase}>AllUpperCase</button>
            </ul>
        </div>
    )
}