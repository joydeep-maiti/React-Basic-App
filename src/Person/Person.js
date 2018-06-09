import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p> Name : {props.name} </p>
            <p> Dept. : {props.dept} </p>
        </div>
    );

}

export default person;