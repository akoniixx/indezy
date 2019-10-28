import React from 'react';
import Prototype from './prototype';
import styled from 'styled-components';

export default (props) => {
    props = {
        ...props,
        unit: 'Meters',
        description: 'Realtime Water Level'
    }
    // const { value } = props;
    // const critical = 1000;
    const height = 156;
    const levelPercent = 56;
    const levelHeight = height*levelPercent/100;
    return (
        <Prototype {...props}>
          <DistanceWrapper height={height}>
           <Water height={levelHeight}/>
           </DistanceWrapper>
        </Prototype>
    );
}

const DistanceWrapper = styled.div`
width: 170px;
height: ${props => props.height}px;
    border-left: 1px solid #FFFFFF;
    border-bottom:1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
    position:relative;
`;

const Water = styled.div`
width: 168px;
height: ${props => props.height}px;
background-color:#297eae;
position:absolute;
bottom:0;

    
`;
