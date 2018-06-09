import React, { Component } from 'react';
import './App.css';
import Persons from './Person/Person'

class App extends Component {
  state = {
    Persons : [
      {name: 'Joydeep', dept: 'CSE'},
      {name: 'Sanju', dept: 'CE' }
    ],
    displayPersons : true
  }
  changeHandler = (event) => {
    this.setState({
      Persons: [
        { name: event.target.value, dept: 'CE' },
        { name: 'Sanju', dept: 'CE' },
      ]
    })
  }
  toggleHandler = (Newname) => {
    console.log('clicked');
      this.setState({
        Persons:[
          { name: Newname, dept: 'CE' },
          { name: 'Sanju', dept: 'CE' },
        ]
      })
  }
  displayHandler = () => {
    let displayPersons = this.state.displayPersons;
    this.setState({
      displayPersons: !displayPersons
    })
  }
  render() {
    return (
      <div className="App">
        <h1>React Basic App</h1>
        <button className='BtnStyle' onClick={this.toggleHandler.bind(this,'Joydeep!!!!')}>Toggle</button>
        <button className='BtnStyle' onClick={this.displayHandler}>Display/Hide</button>
        {this.state.displayPersons ?
          <div>
            <Persons name={this.state.Persons[0].name} dept={this.state.Persons[0].dept} click={this.changeHandler} />
            <Persons name={this.state.Persons[1].name} dept={this.state.Persons[1].dept} />
          </div>
          : null
        }
        
      </div>
    );
  }
}

export default App;
