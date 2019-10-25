import React from 'react';
import Prototype from './prototype';

export default (props) => {
    props = {
        ...props,
        unit: 'Meters',
        description: 'Today Water Level Average'
    }
    return (
        <Prototype {...props}></Prototype>
    );
}