import styled from 'styled-components';
import { disableTextSelection } from 'Components/css';
import {flexBoxColCenter,flexBoxCenter,flexBox} from 'Containers/flexbox';
import { margin,padding } from 'Constants/defaultValues';

export const Wrapper = styled(flexBoxCenter)`
position: fixed;
z-index: 1;
width: 100%;
background-image: linear-gradient(#FFFFFF, #E3E3E3, #E3E3E3);
height: 70px;
`;

export const NavContainer = styled(flexBoxCenter)`
justify-content: space-between;
width: 70%;
height: 80%;
`;
export const Logo = styled.img`
height: 100%;
`;

export const DropdownButton = styled.button`
`;