import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChange(value) {
    this.setState({ task: value });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.task}
          placeholder="Enter new task"
          onChange={event => this.handleChange(event.target.value)}
        />
        <button
          onClick={() => {
            this.props.add(this.state.task);
            this.setState({ task: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default NewTask;
