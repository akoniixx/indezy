import React from 'react';
import Prototype from './prototype';
import styled from 'styled-components';

export default (props) => {
    props = {
        ...props,
        unit: 'NTUs',
        description: 'Realtime Turbidity'
    }
    const { value } = props;
    const critical = 1000;
    return (
        <Prototype {...props}>
            <FaceWrapper>
                <Face src={`assets/img/${value > critical ? 'bad' : 'good'}-face.svg`} />
            </FaceWrapper>
        </Prototype>
    );
}

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