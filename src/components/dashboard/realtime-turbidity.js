import React from 'react';
import Prototype from './prototype';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { isCritical } from 'Utils'

const RealtimeTurbidity = (props) => {
    props = {
        ...props,
        unit: 'NTUs',
        fraction: 0,
        description: 'Realtime Turbidity'
    }
    const { value, critical_min = null, critical_max = null } = props;
    const isInCriticalZone = isCritical(value, critical_min, critical_max);
    console.log('Realtime Turbidity', `Value is ${isInCriticalZone ? '' : 'not '}in critical zone`, critical_min, critical_max);
    return (
        <Prototype {...props}>
            <FaceWrapper>
                <Face src={`assets/img/${isInCriticalZone ? 'bad' : 'good'}-face.svg`} />
            </FaceWrapper>
        </Prototype>
    );
}

//! In case of no redux settings yet, mock data into redux injection.
const mapStateToProps = () => ({
    critical_min: 301,
    critical_max: null
});

export default connect(mapStateToProps)(RealtimeTurbidity);

const FaceWrapper = styled.div`
width: 100%;
margin: auto 0;
display: flex;
justify-content: center;
& > *:not(:first-child) {
    margin-left: 10px;
}
`;

const Face = styled.img`
object-fit: contain;
margin: 20px;
margin-top: 40px;
width: 150px;
height: 150px;
`;