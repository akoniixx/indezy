import React from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import { changePath } from 'Utils';
import { Prototype as NavPrototype } from 'Components/navbar';

const Navigationbar = ({ history }) => {
    return (
        <Nav>
            <Logo
                onClick={() => changePath(history, "/")}
                src="/assets/img/indezy_inner_logo.svg"
            />
            <RightMenu>
                <NotiButton
                    src="/assets/img/bell.svg"
                />
                <Avatar name="indezy" size={40} round />
                <DropdownGroup>
                    <span>Indezy</span>
                    <small>&#9660;</small>
                </DropdownGroup>
            </RightMenu>
        </Nav>
    );
}

export default Navigationbar;

const Nav = styled(NavPrototype)`
background-color: #1D1E62;
color: white;
box-shadow: 0 2px 7px 0 rgba(95, 49, 9, 0.45);
justify-content: center;
position: relative;
`;

const Logo = styled.img`
padding: .3rem 0;
height: 70px;
width: auto;
object-fit: contain;
`;

const RightMenu = styled.div`
position: absolute;
right: 72px;
display: flex;
justify-content: space-between;
align-items: center;
width: 200px;
& > *:not(:first-child) {
    margin-left: 10px;
}
`;

const NotiButton = styled.img`
cursor: pointer;
width: auto;
height: 30px;
`;

const DropdownGroup = styled.div`
cursor: pointer;
display: flex;
align-items: baseline;
& > :last-child {
    margin-left: 5px;
    font-size: 65%;
}
`;