import React from 'react';
import Prototype from './prototype';

export default (props) => {
    props = {
        ...props,
        description: 'Today pH Average'
    }
    return (
        <Prototype {...props} />
    );
}