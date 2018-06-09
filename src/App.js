import React, { Component } from 'react';
import './App.css';
import Persons from './Person/Person'

class App extends Component {
  state = {
    Persons : [
      {name: 'Joydeep', dept: 'CSE'},
      {name: 'Sanju', dept: 'CE' }
    ]
  }
  toggler = false;
  toggleHandler = () => {
    console.log('clicked');
  }
  render() {
    return (
      <div className="App">
        <h1>React Basic App</h1>
        <button className='BtnStyle' onClick={this.toggleHandler}>Toggle</button>
        <Persons name={this.state.Persons[0].name} dept={this.state.Persons[0].dept}/>
        <Persons name={this.state.Persons[1].name} dept={this.state.Persons[1].dept} />
      </div>
    );
  }
}

export default App;
