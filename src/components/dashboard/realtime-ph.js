import React from 'react';
import Prototype from './prototype';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { isCritical } from 'Utils';

const RealtimePH = (props) => {
    props = {
        ...props,
        description: 'Realtime pH'
    }
    const ph = +props.value || 7;
    const { value, critical_min = null, critical_max = null } = props;
    const isInCriticalZone = isCritical(value, critical_min, critical_max);
    console.log('Realtime PH', `Value is ${isInCriticalZone ? '' : 'not'} in critical zone`, critical_min, critical_max);
    return (
        <Prototype {...props}>
            <GuageWrapper>
                {colorList.map(
                    (item, i) => (
                        <Guage
                            key={i}
                            color={i < ph ? item : null} />
                    )
                )}
            </GuageWrapper>
        </Prototype>
    );
}

//! In case of no redux settings yet, mock data into redux injection.
const mapStateToProps = () => ({
    critical_min: 0,
    critical_max: 4
});

export default connect(mapStateToProps)(RealtimePH);

const GuageWrapper = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
& > *:not(:first-child) {
    margin-left: 10px;
}
`;

const Guage = styled.div`
background-color: ${({ color }) => color ? color : '#48485F'};
width: 10px;
`;

const colorList = [
    '#E6242E',
    '#EE6737',
    '#F18F28',
    '#F6BD23',
    '#F8EA02',
    '#7FBD3E',
    '#4EB146',
    '#31A144',
    '#0AB0B1',
    '#438BC7',
    '#36509F',
    '#36509F',
    '#604398',
    '#65217C',
    '#47176B'
];