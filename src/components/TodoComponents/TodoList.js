// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    console.log(props.todos)
    return(
        <div>
            <h3>TodoList</h3>
            {props.todos.map(e => <Todo key={e.id} todo={e.task}/>)}
        </div>
    )
}

export default TodoList;