import React, { Component } from 'react';
import './App.css';
import Persons from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is react app</h1>
        <Persons/>
      </div>
    );
  }
}

export default App;
