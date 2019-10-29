import React, { useEffect, useState, Component, Fragment } from 'react';
import { changeLocale, toggleModal, openModal } from 'Redux/actions';
import { connect } from 'react-redux';
//import for styled
import styled, { css } from 'styled-components';
import { flexBoxColCenter, flexBoxCenter, flexBox } from 'Containers/flexbox';
const points = [
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
    const { point, setPoint } = props;
    return (
        <Fragment>
            <Containers>
                {points.map(
                    (item, i) => point == i
                        ?
                        <PointBoxSelected key={i} onClick={() => setPoint(i)}>
                            <PointText>Point {item.id}</PointText>
                        </PointBoxSelected>
                        :
                        <PointBox key={i} onClick={() => setPoint(i)}>
                            <PointText>Point {item.id}</PointText>
                        </PointBox>
                )}
            </Containers>
        </Fragment>
    );
}

export default Point;

const selected = css`
background: transparent linear-gradient(242deg, #2B90C4 0%, #2C68A1 100%) 0% 0% no-repeat padding-box;
`;

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
background-color: #1C1E3E;
 :hover{
    ${selected}
}
`;

const PointBoxSelected = styled(PointBox)`
${selected}
`;

const PointText = styled.span`
font-size: 1.2em;
color: #FFFFFF;
`;