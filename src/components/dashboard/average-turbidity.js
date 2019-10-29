import React from 'react';
import Prototype from './prototype';

export default (props) => {
    props = {
        ...props,
        unit: 'NTUs',
        fraction: 0,
        description: 'Today Turbidity Average'
    }
    return (
        <Prototype {...props} />
    );
}