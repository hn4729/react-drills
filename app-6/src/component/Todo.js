import React, { Component } from "react";

class Todo extends Component {
  render() {
    let todo = this.props.list.map(element => {
      return <p>{element}</p>;
    });
    return <div>{todo}</div>;
  }
}

export default Todo;
