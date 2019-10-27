import React from 'react';
import styled from 'styled-components';

export default ({ columns = 3, available, value, unit, description, children }) => {
    const width = (100 - +columns) * (1.0 / +columns);
    return (
        <Wrapper width={width}>
            <Status available={available} />
            <ContentWrapper>
                <UnitRow>
                    <Value>{value}</Value>
                    {unit ? <Unit>{unit}</Unit> : ''}
                </UnitRow>
                <Description>{description}</Description>
            </ContentWrapper>
            {
                children ?
                    <ChartWrapper>
                        {children}
                    </ChartWrapper>
                    : ''
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
background: transparent;
padding: 1%;
padding-bottom: calc(1% + 20px);
display: flex;
flex-direction: column;
height: auto;
width: ${({ width }) => `${width}%`};
min-width: 350px;
position: relative;
::before {
    content: "";
    background: #1B1C31 0% 0% no-repeat padding-box;
    backdrop-filter: blur(29px);
    position: absolute;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.78);  
    border-radius: 10px;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .8;
}
`;

const Status = styled.div`
background-color: ${({ available }) => available ? '#00FF27' : '#FF0B0B'};
width: 20px;
height: 20px;
border-radius: 10px;
`;

const ContentWrapper = styled.div`
display: flex;
flex-grow: 1;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 0;
`;

const ChartWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 210px;
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