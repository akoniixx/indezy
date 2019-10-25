import React from 'react';
import styled from 'styled-components';

export default ({ columns = 3, available, value, unit, description, children }) => {
    const width = 100 * (1.0 / +columns) - 1;
    return (
        <Wrapper width={width}>
            <Status available={available} />
            <UnitRow>
                <Value>{value}</Value>
                {unit ? <Unit>{unit}</Unit> : ''}
            </UnitRow>
            <Description>{description}</Description>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
background: #1B1C31 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #000000C4;
border-radius: 10px;
backdrop-filter: blur(29px);
-webkit-backdrop-filter: blur(29px);
padding: 1%;
padding-bottom: calc(1% + 20px);
display: flex;
flex-direction: column;
height: fit-content;
width: ${({ width }) => `${width}%`};
`;

const Status = styled.div`
background-color: ${({ available }) => available ? '#00FF27' : '#FF0B0B'};
width: 20px;
height: 20px;
border-radius: 10px;
`;

const UnitRow = styled.div`
width: 100%;
font-weight: bold;
display: flex;
justify-content: center;
align-items: baseline;
`;

const Value = styled.span`
font-size: 2.5rem;
`;

const Unit = styled.span`
font-size: 1.25rem;
margin-left: 10px;
`;

const Description = styled.span`
display: flex;
justify-content: center;
font-size: 1rem;
font-weight: 100;
`;