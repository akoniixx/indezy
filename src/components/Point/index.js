import React, { useEffect, useState, Component, Fragment } from 'react';
import { changeLocale, toggleModal, openModal } from 'Redux/actions';
import { connect } from 'react-redux';
//import for styled
import styled from 'styled-components';
import {flexBoxColCenter,flexBoxCenter,flexBox} from 'Containers/flexbox';
import Slider from "react-slick";
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

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

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
justify-content: center;
width: 100%;
padding: 0 100px;
background-color: #050617;
& > :not(:first-child){
    margin-left: 10px;
}
`;

const PointBox = styled(flexBoxCenter)`
width: 160px;
height: 72px;
cursor: pointer;
border-radius: 15px;
margin: 10px 0;
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