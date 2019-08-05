import React from "react";

const Todo = props => {
    console.log('Todo props:, ', props)

    return(
        <div
            onClick={()=>props.toggleItem(props.todo.id)}>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;