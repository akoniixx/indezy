import styled from 'styled-components';
import { disableTextSelection } from 'Components/css';

export const Prototype = styled.nav`
display: flex;
height: 80px;
padding-left: 72px;
padding-right: 72px;
justify-content: space-between;
align-items: center;
@media (max-width: 992px){
    padding-left: 40px;
    padding-right: 40px;
}
${disableTextSelection}
`;

export const NavItemsGroup = styled.div`
height: 55px;
display: flex;
justify-content: space-between;
align-items: center;
/* max-width: 700px; */
& > :not(:first-child){
    margin-left: 10px;
}
`;

export const NavItem = styled.span`
font-size: 1em;
font-weight: bold;
cursor: pointer;
`;

export const NavSpeechItem = styled.div`
font-size: 1em;
cursor: pointer;
align-items: center;
`;

export const NavSpeechItemBold = styled.span`
font-size: 1em;
font-weight: bold;
cursor: pointer;
`;
