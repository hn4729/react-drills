import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: [
        "Porsche",
        "Mercedes",
        "BMW",
        "Honda",
        "Mclaren",
        "Toyota",
        "Lexus"
      ],
      filter: ""
    };
  }
  handleChange(value) {
    this.setState({ filter: value });
  }
  render() {
    let carDisplay = this.state.array
      .filter(element => {
        return element.toLowerCase().includes(this.state.filter.toLowerCase());
      })
      .map(element => {
        return <h2>{element}</h2>;
      });
    return (
      <div className="App">
        <input onChange={event => this.handleChange(event.target.value)} />
        {carDisplay}
      </div>
    );
  }
}

export default App;
