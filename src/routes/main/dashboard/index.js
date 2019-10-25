import React, { Fragment } from 'react';
import Filter from './filter';
import styled from 'styled-components';

const DashboardWrapper = () => (
    <Fragment>
        <Filter />
        <PointSelectorMock />
        <DashboardGraphs>
            Graphs da!!!!
        </DashboardGraphs>
    </Fragment>
);

export default DashboardWrapper;

const PointSelectorMock = () => (<div>Point Selector da!!!!</div>)

const DashboardGraphs = styled.div`
padding: 0 6%;
`;