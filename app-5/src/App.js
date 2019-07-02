import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./component/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url="https://i.imgur.com/vFSvyUj.jpg" />
      </div>
    );
  }
}

export default App;
