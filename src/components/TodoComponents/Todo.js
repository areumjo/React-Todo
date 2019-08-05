import React from "react";

const Todo = props => {
    console.log('Todo props:, ', props)
    return(
        <div>
            <p>{props.todo}</p>
        </div>
    )
}

export default Todo;