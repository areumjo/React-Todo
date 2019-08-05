import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state={
      todo: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  };

  addTodo = addedTodo => {
    console.log('addTodo working?')
    const newTodo = {
      task: addedTodo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* <p>TodoList from App.js</p>
        {this.state.todo.map(e => <p>{e.task}</p>)} */}
        <TodoList 
          todos={this.state.todo}
        />
        <TodoForm 
          addTodo={this.addTodo}/>
      </div>
    );
  }
}


export default App;
