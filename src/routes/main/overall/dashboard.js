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
justify-content: center;
& > *:not(:first-child) {
    margin-left: 1%;
}
`;