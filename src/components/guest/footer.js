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
padding: 5rem 12%;
`;

export const ContactFooter = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
width: 300px;
color: ${footerValue.footerText.color};
font: 1.125rem/1.875rem Helvetica Neue Medium;
`;

export const Copyright = styled.div`
position: absolute;
bottom: 0;
flex-basis: 70%;
color: ${footerValue.footerText.color};
margin-bottom: ${margin.xsmall};
font: 0.75rem/2rem Helvetica Neue Medium;
`;

export const FooterColContainer = styled(flexBoxColCenter)`
`;

export const FooterContainer = styled(flexBoxCenter)`
width: 100%;
justify-content: flex-start;
`;

export const FooterHeaderText = styled.span`
font-size: 1.5em;
margin-bottom: ${margin.small};
font: 1.25rem/4.75rem Helvetica Neue Bold;
`;

export const FooterIcon = styled.img`
margin-right: ${margin.small};
height: 25px;
width: 25px;
position: relative;
font-size: 2rem;
`;

export const EmailInput = styled.input`
::placeholder {
    color: #FFFFFF;
    font-family: 1.125rem/4.75rem Helvetica Neue Medium !important;
}
border-radius: 10px;
background-color: #40418c;
border: none;
padding: 8px;
margin: ${margin.xsmall} 0;
`;
