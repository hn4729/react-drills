import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: [
        "Porsche",
        "Mercedies",
        "BMW",
        "Lexus",
        "Audi",
        "Nissan",
        "Honda",
        "Toyota"
      ]
    };
  }
  render() {
    let cars = this.state.array.map(car => {
      return <h2>{car}</h2>;
    });
    return <div className="App">{cars}</div>;
  }
}

export default App;
