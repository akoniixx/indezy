import React from 'react';
import styled from 'styled-components';

const DashboardComponent = () => (
    <Dashboard>
    </Dashboard>
);

export default DashboardComponent;


const Dashboard = styled.div`
padding: 20px 6% 0;
display: flex;
flex-wrap: wrap;
margin: auto;
& > * {
    margin-bottom: 1%;
    &:not(:nth-child(3n+1)) {
        margin-left: 1%;
    }
}
`;