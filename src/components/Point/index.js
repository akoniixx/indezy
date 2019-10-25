import React, { useEffect, useState, Component, Fragment } from 'react';
import { changeLocale, toggleModal, openModal } from 'Redux/actions';
import { connect } from 'react-redux';
//import for styled
import styled from 'styled-components';
import {flexBoxColCenter,flexBoxCenter,flexBox} from 'Containers/flexbox';

const point = [
    {
        id: '1',
        handler: ''
    },
    {
        id: '2',
        handler: ''
    },
    {
        id: '3',
        handler: ''
    },
    {
        id: '4',
        handler: ''
    },
    {
        id: '5',
        handler: ''
    }
];

const Point = props => {
    return (
        <Fragment>
            <Containers>
                {point.map(
                    (item, i) => (
                        <PointBox key={i} onclick={item.handler}>
                            <PointText>Point {item.id}</PointText>
                        </PointBox>
                    )
                )}
            </Containers>
        </Fragment>
    );
}

export default Point;

const Containers = styled(flexBox)`
justify-content: space-between;
width: 100%;
background-color: #050617;
padding: 0 5%;
`;

const PointBox = styled(flexBoxCenter)`
width: 150px;
height: 100px;
cursor: pointer;
border-radius: 15px;
margin: 8px 0;
background-color: #0D0E1F;
 :hover{
    background-color: #2C6EA4;
    /* background-image: linear-gradient(to #2C6EA4 , #2C6EA4 , #2B8EC2); */
}
`;
const PointText = styled.span`
font-size: 1.2em;
color: #FFFFFF;
`;