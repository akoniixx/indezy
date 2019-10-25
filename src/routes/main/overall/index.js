import React, { Fragment } from 'react';
import Filter from './filter';
import Dashboard from './dashboard';
import PointSelectorMock from 'Components/Point'
const Overall = () => (
    <Fragment>
        <Filter />
        <PointSelectorMock />
        <Dashboard />
    </Fragment>
);

export default Overall;