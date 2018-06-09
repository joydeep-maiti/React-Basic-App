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
  changeHandler = (event) => {
    this.setState({
      Persons: [
        { name: event.target.value, dept: 'CE' },
        { name: 'Sanju', dept: 'CE' },
      ]
    })
  }
  toggleHandler = () => {
    console.log('clicked');
      this.setState({
        Persons:[
          { name: 'Joy', dept: 'CE' },
          { name: 'Sanju', dept: 'CE' },
        ]
      })
  }
  render() {
    return (
      <div className="App">
        <h1>React Basic App</h1>
        <button className='BtnStyle' onClick={this.toggleHandler}>Toggle</button>
        <Persons name={this.state.Persons[0].name} dept={this.state.Persons[0].dept} click={this.changeHandler}/>
        <Persons name={this.state.Persons[1].name} dept={this.state.Persons[1].dept}/>
      </div>
    );
  }
}

export default App;
