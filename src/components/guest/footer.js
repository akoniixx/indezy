import styled from 'styled-components';
import { colors } from '../css';
import { margin,padding } from 'Constants/defaultValues';
import {flexBoxColCenter,flexBoxCenter,flexBox} from 'Containers/flexbox';
import { Icon } from 'antd';

const footerValue = {
    background: {
        color: '#1D1E62'
    },
    footerText: {
        color: '#FFFFFF'
    }
};

export const Footer = styled(flexBoxColCenter)`
background-image: url("/assets/img/footer.png");
background-repeat: no-repeat;
background-position: right;
background-color: #1D1E62;
position: relative;
padding: ${margin.big}
`;

export const ContactFooter = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
width: 300px;
color: ${footerValue.footerText.color};
flex-basis: 50%
`;

export const Copyright = styled.div`
position: absolute;
bottom: 0;
flex-basis: 70%;
color: ${footerValue.footerText.color};
margin-bottom: ${margin.xsmall}
`;

export const FooterColContainer = styled(flexBoxColCenter)`
`;

export const FooterContainer = styled(flexBoxCenter)`
flex-wrap: wrap
`;

export const FooterHeaderText = styled.span`
font-size: 1.5em;
margin-bottom: ${margin.small}
`;

export const FooterIcon = styled.img`
margin-right: ${margin.small};
height: 25px;
weight: 25px;
position: relative;
`;

export const EmailInput = styled.input`
::placeholder {
    color: #FFFFFF;
}
background-color: #40418c;
border: none;
padding: 8px;
margin: ${margin.xsmall} 0;
`;
