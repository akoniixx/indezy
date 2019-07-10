import styled from 'styled-components';
import { colors } from '../css';

export const Footer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 150px;
`;

export const LogoFooter = styled.img`
margin-right: 50px;
height: 60px;
width: auto;
`;

export const ContactFooter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${colors.text};
max-width: 350px;
* {
    text-align: center;
}
`;