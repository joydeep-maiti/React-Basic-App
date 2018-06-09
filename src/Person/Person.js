import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p> Name : {props.name} </p>
            <p> Dept. : {props.dept} </p>
            <p> Name <input type='text' onChange={props.click} value={props.name}></input></p>
        </div>
    );

}

export default person;