import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p>Name : {props.name} </p>
        </div>
    );

}

export default person;