import React, {Component} from 'react';
import {v4 as uuid} from "uuid";
import {TodoInput} from './components/todo-input/todo-input.component';
import {TodoList} from './components/todo-list/todo-list.component';
import './App.css';



class App extends Component {
  constructor () {
    super();

    this.state = {
      todos: [],
      id: uuid(),
      inputText: '',
      editItem: false
    }
  }

  handleChange =(e) => {
    e.preventDefault();
    this.setState({inputText: e.target.value});
  }

  handleSubmit =(e) => {
    e.preventDefault();
    const newTodo ={  //Todo: form a better name for the "createTodo variable"
      id: this.state.id,
      todoText: this.state.inputText
    }
    
    const updatedTodo = [...this.state.todos, newTodo]
    this.setState({
      todos: updatedTodo,
      inputText: '',
      id: uuid(),
      editItem: false
    })

  }

  handleDelete = (id) => {
    const filteredTodo = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: filteredTodo
    })
  }

  handleEdit = (id) => {
    const filteredTodo = this.state.todos.filter(todo => todo.id !== id);
    const selectedItem = this.state.todos.find(todo => todo.id === id);

    this.setState({
      todos: filteredTodo,
      inputText: selectedItem.todoText,
      id:id,
      editItem: true
    })

  }


  render () {
    return (
      <div className="App container">
        <h1 className="title">Todo App</h1>

        <TodoInput 
        inputText={this.state.inputText}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} 
        editItem={this.state.editItem}
        />

        <TodoList 
        todos={this.state.todos}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        />
      </div>

      
    )
  }
}



export default App;


// Type in text.
// trigger set state (onChange)
//create method that runs when onChange fire => takes the synthetic event and gets its target value, then this.setState
// take the set state and pass it to the components that needs it.
// the todo-list needs it the value of setState, so, its passed down to it. it will then loop through it the texts and render the main todo component.
// the todo component is where you put the last components.


// handleChange(e) {
//   e.preventDefault();
//   this.setState({inputText: e.target.value});
// }

// handleAdd() {
//   const {todos, inputText} = this.state;
//   const newTodos = todos.slice();
//   newTodos.push(inputText);
//   this.setState({ id: uuid.v4(), todos: newTodos});
// }