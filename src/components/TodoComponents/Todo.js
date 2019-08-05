import React from "react";

import './Todo.css';

const Todo = props => {
    console.log('Todo props:, ', props)

    return(
        <ul
            className={`todo${props.todo.completed ? " completed" : ""}`}
            onClick={()=>props.toggleItem(props.todo.id)}>
            <li className="todo-task">{props.todo.task}</li>
        </ul>
    )
}

export default Todo;