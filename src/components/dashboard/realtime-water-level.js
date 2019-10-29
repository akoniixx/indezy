import React from 'react';
import Prototype from './prototype';
import styled from 'styled-components';
import { isCritical, calculateDecimalPercentage } from 'Utils';
import { connect } from 'react-redux';

//! This component value calculate in CENTIMETRES, so input value MUST be centimetre unit too.
//! Critical zone calculation is (-infinite, critical_min) && (critical_max, infinite) so isCritical() can calculate inversion of critical zone only.

const RealtimeWaterLevel = (props) => {
    props = {
        ...props,
        value: props.value / 100,
        unit: 'Meters',
        fraction: 2,
        description: 'Realtime Water Level'
    }
    //! Critical zone calculation
    const { value } = props;
    const { critical_min = null, critical_max = null, max_water_level = 156 } = props;
    const isInCriticalZone = !isCritical(value, critical_min, critical_max);
    console.log('Realtime Water Level', `Value is ${isInCriticalZone ? '' : 'not '}in critical zone`, critical_min, critical_max);
    //! Critical zone calculation end
    const height = 156; //chart height (px)
    const levelPercent = calculateDecimalPercentage(value, max_water_level);
    const levelHeight = height * levelPercent;
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
    critical_max: 60,
    max_water_level: 200
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
background-image: linear-gradient(#2B90C4, #2C68A100);
position:absolute;
bottom:0;

    
`;
