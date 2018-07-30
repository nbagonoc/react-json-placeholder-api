import React, { Component } from "react";
import "./App.css";
import Users from "./Users/Users";
import Banner from "./Banner/Banner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner
          title="react"
          subTitle="Just playing around with JSON Placeholder API"
        />
        <Users />
      </div>
    );
  }
}

export default App;
