// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    console.log('TodoList ', props)
    return(
        <div>
            <h3>TodoList</h3>
            {props.todos.map(e => 
                <Todo todo={e} key={e.id} toggleItem={props.toggleItem}/>)}
        </div>
    )
}

export default TodoList;