import React, { Component } from "react";
import "./App.css";
import NewTask from "./component/NewTask";
import List from "./component/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["write", "workout"]
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(value) {
    this.setState({ list: [...this.state.list, value] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.addTask} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
