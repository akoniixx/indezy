import React from 'react';
import styled from 'styled-components';

export default (props) => (
    <DivStyle>
        <LeftGroup>
            <Dashboard>Dashboard</Dashboard>
            <SiteName>{props.point || "Point 1"}</SiteName>
        </LeftGroup>

        <Button>
            <span>Today</span>
            <Caret>&#8249;</Caret>
        </Button>
    </DivStyle>
);

const DivStyle = styled.div`
padding: 0 16%;
display: flex;
justify-content: space-between;
height: 100px;
align-items: center;
`;


const Dashboard = styled.span`
text-align: left;
letter-spacing: 0;
color: #FFFFFF; 
font-weight: bold; /*ความหนา*/
font: 1.25rem Helvetica Neue Medium;
`;

const SiteName = styled.span`
font: 1rem Helvetica Neue Light;
letter-spacing: 0;
color: #FFFFFF;
`;

const LeftGroup = styled.div`
flex-direction: column;
display: flex;
justify-content: space-around;
height: 60%;
& > *:first-child {
    margin-bottom: 5px;
}
`;

const Button = styled.div`
padding: 0 20px;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
width: 160px;
height:43px;
cursor: pointer;
background: transparent linear-gradient(68deg, #F47529 0%, #FCB116 100%) 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 6px #0000000D;
border-radius: 10px;
font: 1rem Helvetica Neue Light;
`;

const Caret = styled.span`
transform:rotate(270deg);
font: 2rem Helvetica Neue;
`;