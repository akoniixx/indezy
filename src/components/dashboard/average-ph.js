import React from 'react';
import Prototype from './prototype';

export default (props) => {
    props = {
        ...props,
        fraction: 1,
        description: 'Today pH Average'
    }
    return (
        <Prototype {...props} />
    );
}