import React from 'react';
import Prototype from './prototype';

export default (props) => {
    props = {
        ...props,
        value: props.value / 100,
        unit: 'Meters',
        fraction: 2,
        description: 'Today Water Level Average'
    }
    return (
        <Prototype {...props} />
    );
}