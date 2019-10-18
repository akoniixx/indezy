import styled from 'styled-components';
import { margin,padding } from 'Constants/defaultValues';

import {flexBox} from 'Containers/flexbox';
import { Prototype, NavItemsGroup as ng, NavItem as ni, NavSpeechItem as Ns,NavSpeechItemBold as NsB } from '../navbar';

const colors = {
    background: {
        nav: '#FFFCF9',
        indezyBG: '#1D1E62',
        indezyBGWhite: '#FFFFFF'
    },
    text: {
        green: '#5F8B13',
        navItem: '#FFFFFF',
        themeOrange: "#F47529",
        themeBlue: "#2C68A1",
        themeYellow: "#F29C32"
    },
    shadow: {
        nav: 'rgba(95, 49, 9, 0.45)'
    }
};

export const NavigationBar = styled(Prototype)`
background-color: ${colors.background.indezyBG};
color: ${colors.text.navItem};
box-shadow: 0 2px 7px 0 ${colors.shadow.nav};
`;

export const Logo = styled.img`
    padding: .3rem 0;
    height: 70px;
    width: auto;
    object-fit: contain;
`;

export const NavItemsGroup = styled(ng)`
flex-grow: 1;
padding: 0 5%;
`;

export const NavItem = styled(ni)`
color: ${colors.text.navItem};
`;

export const NavItemGreen = styled(NavItem)`
color: ${colors.text.green};
`;

export const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

export const MenuMobileButtonWrapper = styled.div`
font-size: 20px;
font-weight: bold;
cursor: pointer;
`;