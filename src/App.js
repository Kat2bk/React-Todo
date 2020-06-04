import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const items = [
  {
    task: "Clean kitchen",
    id: 156,
    completed: false
  }, 
  {
    task: "Cook dinner",
    id: 127,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
  super();
  this.state = {
    items: items
  };
}

addItem = (item) => {
  console.log(item)
  const newItem = {
    task: item,
    id: Date.now(),
    completed: false
  };
  this.setState({
    items: [...this.state.items, newItem]
  })
}

clearItem = (event) => {
  event.preventDefault();
  this.setState({...this.state.items.filter(item => (
    item.completed === true
  ))})
}

toggleCompleted = element => {
  this.setState({
    items: this.state.items.map(tasks => {
      if (element === tasks.id) {
        return {
          ...tasks,
          completed: !tasks.completed
        };
      }
      return element;
    })
  })
}


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearItem={this.clearItem}/>
        <TodoList item={this.state.items} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
