import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p> Name : {props.name} </p>
            <p> Dept. : {props.dept} </p>
            <p> Name <input type='text' onChange={props.changeName} value={props.name}></input></p>
            <button className='dlt' onClick={props.delete}>Delete</button>
        </div>
    );

}

export default person;