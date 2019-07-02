import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./component/Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["write", "workout"],
      task: ""
    };
  }
  handleChange(task) {
    this.setState({ task });
  }
  render() {
    return (
      <div className="App">
        <h1>My to-do list: </h1>
        <input
          placeholder="Enter new task"
          onChange={event => this.handleChange(event.target.value)}
        />
        <button
          onClick={() => {
            this.setState({ list: [...this.state.list, this.state.task] });
          }}
        >
          Add
        </button>
        <Todo list={this.state.list} />
      </div>
    );
  }
}

export default App;
