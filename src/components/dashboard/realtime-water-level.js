import React from 'react';
import Prototype from './prototype';
import styled from 'styled-components';
import { isCritical } from 'Utils';
import { connect } from 'react-redux';

const RealtimeWaterLevel = (props) => {
    props = {
        ...props,
        unit: 'Meters',
        description: 'Realtime Water Level'
    }
    //! Critical zone calculation
    const { value } = props;
    const critical_min = props.critical_min || null;
    const critical_max = props.critical_max || null;
    const isInCriticalZone = !isCritical(value, critical_min, critical_max);
    console.log('Realtime Water Level', `Value is ${isInCriticalZone ? '' : 'not'} in critical zone`, critical_min, critical_max);
    //! Critical zone calculation end
    const height = 156;
    const levelPercent = 56;
    const levelHeight = height * levelPercent / 100;
    return (
        <Prototype {...props}>
            <DistanceWrapper height={height}>
                <Water height={levelHeight} />
            </DistanceWrapper>
        </Prototype>
    );
}

const mapStateToProps = () => ({
    critical_min: 50,
    critical_max: 60
})

export default connect(mapStateToProps)(RealtimeWaterLevel);

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
