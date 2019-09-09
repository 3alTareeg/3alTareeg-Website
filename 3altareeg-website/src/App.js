import React, { Component } from "react";
import "./App.css";
import axios from "axios";

//WARNING: PLEASE DONT DO ANY CHANGES IN THIS FILE, JUST CALL YOUR COMPONENT HERE TO TEST IF IT WORKS, THEN REMOVE IT.

class App extends Component {
  state = {};

  checkServer = () => {
    axios.get("http://localhost:9000/").then(res => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <>
        <h1>React Working Fine</h1>
        <button onClick={this.checkServer}>Checking server</button>
      </>
    );
  }
}

export default App;
