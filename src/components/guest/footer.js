import styled from 'styled-components';
import { colors } from '../css';

const footerValue = {
    background: {
        color: '#1D1E62'
    },
    footerText: {
        color: '#FFFFFF'
    }
};

export const Footer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 150px;
background-color: ${footerValue.background.color};
`;

export const LogoFooter = styled.img`
margin-right: 50px;
height: 80px;
width: auto;
`;

export const ContactFooter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${footerValue.footerText.color};
max-width: 350px;
* {
    text-align: center;
}
`;