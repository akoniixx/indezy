import React from 'react';
import styled from 'styled-components';



const DivStyle = styled.div`
padding: 0 100px;
display: flex;
justify-content: space-between;
margin: 0 6.25rem;
height: 100px;
align-items: center;
`;


const Dashboard = styled.span`
text-align: left;
letter-spacing: 0;
color: #FFFFFF; 
font-weight: bold; /*ความหนา*/
`;

const SiteName = styled.span`
letter-spacing: 0;
color: #FFFFFF;
`;

const LeftGroup = styled.div`
flex-direction: column;
display: flex;
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
`;

const Caret = styled.span`
transform:rotate(270deg);
`;



export default (props) => {
    return (
        <DivStyle>
            <LeftGroup>
                <Dashboard>Dashboard</Dashboard>
                <SiteName>Industrial 1</SiteName>
            </LeftGroup>

            <Button>
                <span>Today</span>
                <Caret>&#8249;</Caret>
            </Button>
            {/* <MyP>{caret}</MyP> */}
        </DivStyle>
        // <div style={divStyle}>
        //     {caret}
        // </div>
    );
}

