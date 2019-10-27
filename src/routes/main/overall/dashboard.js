import React from 'react';
import styled from 'styled-components';
import AvgPH from 'Components/dashboard/average-ph';
import AvgTurbid from 'Components/dashboard/average-turbidity';
import AvgWL from 'Components/dashboard/average-water-level';
import RealtimePH from 'Components/dashboard/realtime-ph';
import RealtimeTurbid from 'Components/dashboard/realtime-turbidity';

const DashboardComponent = () => (
    <Dashboard>
        <AvgPH value={"5.0"} available />
        <AvgTurbid value={'2000'} available />
        <AvgWL value="3.0" available />
        <RealtimePH value="7.0" available />
        <RealtimeTurbid value="500" available />
    </Dashboard>
);

export default DashboardComponent;


const Dashboard = styled.div`
padding: 20px 6% 0;
display: flex;
flex-wrap: wrap;
margin: auto;
& > * {
    margin: .5%;
}
`;