import styled from 'styled-components';
import { disableTextSelection } from 'Components/css';
import {flexBoxColCenter,flexBoxCenter,flexBox} from 'Containers/flexbox';

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

export const EmailBox = styled(flexBox)`
align-item: center
justify-content: start
`;


//Introduce section

export const TextBox = styled.div`
height: 400px
display: flex
flex-direction: column
justify-content: center
padding: 0px 15px
`;

export const IntroduceText = styled.span`
font-weight: bold
font-size: 5em
`;

export const SubIntroduceText = styled.span`
font-weight: bold
`;

export const IntroduceImg = styled.img`
padding: 0px 15px
width: 640px
height: 360px
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