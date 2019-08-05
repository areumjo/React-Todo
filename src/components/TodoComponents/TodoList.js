// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import { Icon } from 'semantic-ui-react';

const TodoList = props => {
    console.log('TodoList ', props)
    return(            
        <div className="todo-list">
            <h2 className="todolist-title"><Icon className="sticky note outline" />Todo Note<Icon className="sticky note outline" /></h2>
            
            {props.todos.map(e => 
                <Todo todo={e} key={e.id} toggleItem={props.toggleItem}/>)}
                
        </div>

    )
}

export default TodoList;