import React from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';
import { changePath } from 'Utils';
import { Prototype as NavPrototype } from 'Components/navbar';

const Navigationbar = ({ history, user }) => {
    return (
        <Nav>
            <Logo
                onClick={() => changePath(history, "/")}
                src="/assets/img/indezy_inner_logo.svg"
            />
            <RightMenu>
                <Avatar name={user} size={40} round />
                <Username>{user}</Username>
            </RightMenu>
        </Nav>
    );
}

const mapStateToProps = ({ auth }) => ({ user: auth.user});

export default connect(mapStateToProps)(Navigationbar);

const Nav = styled(NavPrototype)`
background-color: #050617;
color: white;
box-shadow: 0 2px 7px 0 rgba(95, 49, 9, 0.45);
justify-content: center;
position: relative;
padding: .7rem 0 .7rem 0;
height: 60px;
`;

const Logo = styled.img`
height: fit-content;
width: auto;
object-fit: contain;
`;

const RightMenu = styled.div`
position: absolute;
right: 72px;
display: flex;
justify-content: space-between;
align-items: center;
& > *:not(:first-child) {
    margin-left: 10px;
}
margin-left: 10px;
margin-right: 72px;
`;

const Username = styled.div`
font-size: .75rem;
`;