import React, { Fragment } from 'react';
import Filter from './filter';
import styled from 'styled-components';

const Overall = () => (
    <Fragment>
        <Filter />
        <PointSelectorMock />
        <Dashboard>
            Graphs da!!!!
        </Dashboard>
    </Fragment>
);

export default Overall;

const PointSelectorMock = () => (<div>Point Selector da!!!!</div>)

const Dashboard = styled.div`
padding: 0 6%;
`;