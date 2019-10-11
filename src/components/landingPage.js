import styled from 'styled-components';
import { disableTextSelection } from 'Components/css';
import {flexBoxColCenter,flexBoxCenter,flexBox} from 'Containers/flexbox';
import { margin,padding } from 'Constants/defaultValues';
import {Slider} from 'react-slick';

const bg = 'Assets/img/bg.png';
export const Logo = styled.img`
height: 55px;
width: auto;
`;

export const BGImg = styled.img`
`;

export const ContentLine = styled(flexBoxColCenter)`
`;

export const ContentBox = styled(flexBoxCenter)`
padding: 20px
`;

export const AllInContentBox = styled(flexBoxColCenter)`
background-image: url("/assets/img/dashboardDemo.png");
background-repeat: no-repeat;
background-size: contain;
background-position: center;
width: 100%;
height: 500px;
`;

export const MoneyBox = styled(flexBoxCenter)`
background-image: url("/assets/img/money_rain.jpg");
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 500px;
opacity: 0.2;
`;

export const FirstContentBox = styled(flexBoxColCenter)`
background-image: url("/assets/img/1.jpg");
background-repeat: no-repeat;
background-size: cover;
width: 100%;
`;

export const EmailBox = styled(flexBox)`
align-item: center;
justify-content: start;
`;


//Introduce section

export const TextBox = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
padding: 0px 15px;
margin-left: ${margin.big};
`;

export const IntroduceText = styled.span`
font-weight: bold;
font-size: 5em;
color: #FFFFFF;
`;

export const SubIntroduceText = styled.span`
font-weight: bold;
`;

export const IntroduceImg = styled.img`
width: 70%;
`;

export const CenterText = styled.span`
font-weight: bold
font-size: 2em
padding: 20px
`;

//Card section

export const CardItem = styled(flexBoxColCenter)`
height: 200px
width: 180px
margin: 0px 30px
border-radius:5px;
`;

export const CardImg = styled.img`
padding: 15px 15px
width: 104px
height: 100px
`;

export const PartnerImg = styled.img`
padding: 15px 15px
width:200px
`;

export const CardText = styled.span`
font-weight: bold
fontSize: 1.5em
`;

export const SubCardText = styled.span`
font-weight: bold
`;