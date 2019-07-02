import React, { Component } from "react";
import Todo from "./Todo";

class List extends Component {
  render() {
    let display = this.props.list.map(element => {
      return <Todo todo={element} />;
    });
    return <div>{display}</div>;
  }
}

export default List;
