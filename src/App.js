import React, { Component } from 'react';
import './App.css';
import Persons from './Person/Person'

class App extends Component {
  state = {
    Persons : [
      {name: 'Joydeep', dept: 'CSE', id: 'y3cc'},
      {name: 'Sanju', dept: 'CE' , id: 'unrhvui'}
    ],
    displayPersons : true
  }
  changeNameHandler = (event, id) => {
    const pIndex = this.state.Persons.findIndex( p =>  p.id === id )
    console.log(pIndex);
    const person = {...this.state.Persons[pIndex]}
    person.name = event.target.value;
    const persons = [...this.state.Persons];
    persons[pIndex] = person;
    this.setState({
      Persons: persons
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
  deleteHandler = (personIndex) => {
    const persons = [...this.state.Persons];
    persons.splice(personIndex, 1)
    console.log(persons);
    this.setState({Persons:persons});
  }
  render() {
    return (
      <div className="App">
        <h1>React Basic App</h1>
        {/* <button className='BtnStyle' onClick={this.toggleHandler.bind(this,'Joydeep!!!!')}>Toggle</button> */}
        <button className='BtnStyle' onClick={this.displayHandler}>Display/Hide</button>
        {this.state.displayPersons ?
           this.state.Persons.map((person, index) => {
            return (<Persons 
              name={person.name} 
              dept={person.dept} 
              key={person.id} 
              changeName={(event) => this.changeNameHandler(event, person.id)} 
              delete={this.deleteHandler.bind(this, index)} />)
          })
          : null
        }
      </div>
    );
  }
}

export default App;
