import React from 'react';
import styled from 'styled-components';
import AvgPH from 'Components/dashboard/average-ph';
import AvgTurbid from 'Components/dashboard/average-turbidity';
import AvgWL from 'Components/dashboard/average-water-level';
import RealtimePH from 'Components/dashboard/realtime-ph';
import RealtimeTurbid from 'Components/dashboard/realtime-turbidity';
import RealtimeWater from 'Components/dashboard/realtime-water-level';

const exceptionKeys = ['Relay state']

const DashboardComponent = (props) => {
    //Todo filter unrelated keys out.
    const filteredKeys = Object.keys(props)
        .filter(key => !exceptionKeys.includes(key));
    let columns = filteredKeys.length || 3;
    return (
        <Dashboard>
            {filteredKeys.includes('pH') ? <AvgPH value="5" columns={columns} available /> : ''}
            {filteredKeys.includes('Turbidity') ? <AvgTurbid value="140" columns={columns} available /> : ''}
            {filteredKeys.includes('Distance') ? <AvgWL value="150" columns={columns} available /> : ''}
            {filteredKeys.includes('pH') ? <RealtimePH value={props.pH} columns={columns} available /> : ''}
            {filteredKeys.includes('Turbidity') ? <RealtimeTurbid value={props.Turbidity} columns={columns} available /> : ''}
            {filteredKeys.includes('Distance') ? <RealtimeWater value={props.Distance} columns={columns} available /> : ''}
        </Dashboard>
    );
}

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