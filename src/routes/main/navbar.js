import React from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import { logout } from 'Redux/actions';
import { connect } from 'react-redux';
import { changePath } from 'Utils';
import { Prototype as NavPrototype } from 'Components/navbar';

const Navigationbar = ({ history, user, logout }) => (
    <Nav>
    {console.log("Nav_auth", user)}
        <LeftMenu>
            <SidebarButton>
                <SidebarIcon
                    src="/assets/img/side-bar-icon.svg"
                />
            </SidebarButton>
            <Searchbox placeholder="Search" />
        </LeftMenu>
        <Logo
            onClick={() => changePath(history, "/")}
            src="/assets/img/indezy_inner_logo.svg"
        />
        <RightMenu onClick={() => logout()}>
            <Avatar name={user || ""} size={40} round />
            <span>{user || "Indezy"}</span>
        </RightMenu>
    </Nav>
);

const mapStateToProps = ({ auth }) => ({ user: auth.user.email });

export default connect(mapStateToProps, { logout })(Navigationbar);

const Nav = styled(NavPrototype)`
background: linear-gradient(90deg, #151A2B, #181B2C);
box-shadow: 0px 3px 6px #0000009F;
opacity: 1;
backdrop-filter: blur(30px);
-webkit-backdrop-filter: blur(30px);
color: white;
justify-content: space-between;
padding: .7rem 0 .7rem 0;
height: 60px;
font-size: .75rem;
position: relative;
`;

const Logo = styled.img`
position: absolute;
left: 50%;
transform: translate(-50%, 0);
height: fit-content;
width: auto;
object-fit: contain;
`;

const RightMenu = styled.div`
margin-right: 72px;
display: flex;
justify-content: space-between;
align-items: center;
& > *:not(:first-child) {
    margin-left: 10px;
}
margin-left: 10px;
margin-right: 72px;
font: 0.75rem Helvetica Neue Light;
`;

const LeftMenu = styled.div`
display: flex;
align-items: center;
& > *:not(:first-child) {
    margin-left: 20px;
}
`;

const Searchbox = styled.input`
height: 35px;
width: 250px;
background: black;
border-radius: 10px;
padding: 0 20px;
font: 0.75rem Helvetica Neue Light;
::placeholder {
    color: #FFFFFF72;
}
`;

const SidebarButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
height: 60px;
width: 60px;
background: transparent linear-gradient(225deg, #FCB116 0%, #F47529 100%) 0% 0% no-repeat padding-box;
opacity: 1;
`;

const SidebarIcon = styled.img`
height: inherit;
width: auto;
object-fit: contain;
padding: 15px;
`;