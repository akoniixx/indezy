import React, { Fragment } from 'react';
import Filter from './filter';
import Dashboard from './dashboard';

const Overall = () => (
    <Fragment>
        <Filter />
        <PointSelectorMock />
        <Dashboard />
    </Fragment>
);

export default Overall;

const PointSelectorMock = () => (<div>Point Selector da!!!!</div>)