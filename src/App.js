import React, { Component } from 'react';
import './App.css';
import Persons from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Basics</h1>
        <Persons name='Joydeep'/>
      </div>
    );
  }
}

export default App;
