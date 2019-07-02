import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleUsername(value) {
    this.setState({ username: value });
  }
  handlePassword(value) {
    this.setState({ password: value });
  }
  render() {
    return (
      <div>
        <input onChange={event => this.handleUsername(event.target.value)} />
        <input onChange={event => this.handlePassword(event.target.value)} />
        <button
          onClick={() =>
            alert(
              `Username: ${this.state.username} Password: ${
                this.state.password
              }`
            )
          }
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
