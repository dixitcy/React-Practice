import React from "react";

class TestInput extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }
  inputChange() {
    this.setState({ inputValue: this.refs.onlyInput.value });
  }
  handleSubmit() {
    let title = this.refs.onlyInput.value;
    if (title) {
      let newTodo = {
        title,
        isCompleted: false
      };
      this.props.addTodo(newTodo);
      this.setState({ inputValue: "" });
    }
  }
  render() {
    return (
      <div>
        <input
          ref="onlyInput"
          onChange={this.inputChange.bind(this)}
          value={this.state.inputValue}
        />
        <br />
        <a onClick={this.handleSubmit.bind(this)} href="#">
          Submit
        </a>
      </div>
    );
  }
}

export default TestInput;
