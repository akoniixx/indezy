import styled from 'styled-components';
import { disableTextSelection } from 'Components/css';
import { flexBoxColCenter, flexBoxCenter, flexBox, flexBoxCol } from 'Containers/flexbox';
import { margin, padding } from 'Constants/defaultValues';

export const ContainerLine = styled(flexBoxColCenter)`
position: relative;
`;
export const ContainerWrapper = styled.div`
width: 100%;
`;
export const ContainerHightlights = styled(ContainerWrapper)`
background-position: center;
position: relative;
z-index: -2;
::before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    opacity: 0.8;
    background: black;
}
`;
export const Container = styled(flexBoxColCenter)`
margin: 32px;
`;

export const RowContainer = styled(flexBoxCenter)`
`;

export const SubContainer = styled(flexBoxCenter)`
margin: 32px;
width: 500px;
height: 100px;
`;

export const SubColContainer = styled(flexBoxColCenter)`
margin: 32px;
width: 300px;
height: 300px;
`;

export const BlueHorizonLine = styled.div`
height: 3px;
background-color: #039DC2;
width: 100%;
`;

export const BlueVerticalLine = styled.div`
width: 3px;
background-color: #039DC2;
height: 100%;
`;

export const OrangeHorizonLine = styled.div`
height: 3px;
background-color: #FF9D00;
width: 100%;
margin-bottom: 32px;
`;

export const OrangeVerticalLine = styled.div`
width: 3px;
background-color: #FF9D00;
height: 100%;
margin-right: 32px;
`;

export const Star = styled.img`
width: 50px;
height: 50px;
margin-left: 12px;
margin-right: 12px;
`;

export const IntroduceText = styled(flexBoxColCenter)`
justify-content: center;
position: absolute;
height: 700px;
top: 0;
z-index: 1;
`;

export const IntroduceText1 = styled.span`
color: #FFFFFF;
font-size: 3em;
font: 2.5rem/7.0625rem Helvetica Neue Light;
`;

export const IntroduceText2 = styled.span`
color: #F47529;
font-weight: bold;
font-size: 4em;
font: 4.375rem/7.0625rem Helvetica Neue Condensed Black;
`;