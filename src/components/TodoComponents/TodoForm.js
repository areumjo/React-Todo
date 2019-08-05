import React from 'react';
import { Icon } from 'semantic-ui-react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state={
            todo: ""
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: ""
        })
    }
    render() {
        return(
            <>
                <form onSubmit={this.addTodo}>
                    <input 
                        placeholder="add todos..."
                        type="text"
                        name='todo'
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    <button className="addtodo-btn"><Icon name='pencil alternate' size='big' /></button>
                </form>
                <button className="clear-btn" onClick={this.props.clearCompleted}><Icon name='eraser' size='big' /><span>Erase completed todos</span><Icon name='eraser' size='big' /></button>
            </>
        )
    }
}

export default TodoForm;