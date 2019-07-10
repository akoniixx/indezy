import styled from 'styled-components';
import { Prototype, NavItemsGroup as ng, NavItem as ni } from '../navbar';

const colors = {
    background: {
        nav: '#FFFCF9'
    },
    text: {
        green: '#5F8B13',
        navItem: '#A07549'
    },
    shadow: {
        nav: 'rgba(95, 49, 9, 0.45)'
    }
};

export const NavigationBar = styled(Prototype)`
background-color: ${colors.background.nav};
color: ${colors.text.navItem};
box-shadow: 0 2px 12px 0 ${colors.shadow.nav};
`;

export const Logo = styled.img`
height: 55px;
width: auto;
`;

export const NavItemsGroup = ng;

export const NavItem = styled(ni)`
color: ${colors.text.navItem};
`;

export const NavItemGreen = styled(NavItem)`
color: ${colors.text.green};
`;

export const MenuMobileButtonWrapper = styled.div`
font-size: 20px;
font-weight: bold;
cursor: pointer;
`;