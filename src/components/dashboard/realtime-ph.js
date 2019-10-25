import React from 'react';
import Prototype from './prototype';
import styled from 'styled-components';

export default (props) => {
    props = {
        ...props,
        description: 'Realtime pH'
    }
    const ph = +props.value || 7;
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

const GuageWrapper = styled.div`
width: 100%;
height: 80px;
margin: auto 10px;
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