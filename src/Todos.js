import React from "react";
import TextInput from "./TextInput";
import TodoItem from "./TodoItem";

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          title: "Do Laundry",
          isCompleted: false
        },
        {
          title: "Buy Groceries",
          isCompleted: false
        }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
  }
  getTodos() {
    var that = this;
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        return res.json();
      })
      .then(response => {
        console.log(response);
        that.setState({ todos: response });
      });
  }
  componentDidMount() {
    // this.getTodos();
  }
  addTodo(newTodo) {
    let { todos } = this.state;
    todos.push(newTodo);
    this.setState({ todos: todos });
  }
  removeTodo(index) {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos: todos });
  }
  render() {
    return (
      <div>
        <h3> Todo List </h3>
        <TextInput addTodo={this.addTodo} />
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <TodoItem
                todo={todo}
                index={index}
                removeTodo={this.removeTodo.bind(this)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todos;
