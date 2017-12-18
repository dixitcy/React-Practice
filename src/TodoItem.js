import React from "react";

class TodoItem extends React.Component {
  onDelete(index) {
    this.props.removeTodo(index);
  }
  render() {
    let { todo, index } = this.props;
    return (
      <li>
        {todo.title}
        <a href="#" onClick={this.onDelete.bind(this, index)}>
          X
        </a>
      </li>
    );
  }
}

export default TodoItem;
