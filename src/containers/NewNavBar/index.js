import React, { useEffect, useState, Component, Fragment } from 'react';
import { DropdownButton as Button } from 'Components/guest/buttons';
import { changeLocale, toggleModal, openModal } from 'Redux/actions';
import { connect } from 'react-redux';
import LoginModal from 'Components/LoginModal';
//import for styled
import styled from 'styled-components';
import {flexBoxColCenter,flexBoxCenter,flexBox} from 'Containers/flexbox';


const NewNavBar = props => {
    const {openModal} = props;
    const [Scrolled, setScrolled] = useState(true);
    const handler = () => window.pageYOffset <= 700 ? setScrolled(true) : setScrolled(false);
    useEffect(() => {
		window.addEventListener('scroll', handler);
		return () => window.removeEventListener('scroll', handler);
    }, []);
    let img = 'assets/img/';
    Scrolled ?  img = img + 'IndezyLogo-05.svg' : img = img + 'IndezyLogo.svg'
    return (
        <Fragment>
            <Wrapper Scrolled={Scrolled}>
                <NavContainer>
                    <Logo src={img} />
                    <Button onClick={() => openModal('loginModal')}>Menu</Button>
                    <Logo src="assets/img/hamburger.png" />
                    <LoginModal />
                </NavContainer>
            </Wrapper>
        </Fragment>
    );
}


const mapStateToProps = ({ modals }) => (
    { isOpen: modals.loginModal }
);

export default connect(mapStateToProps, { toggleModal, openModal })(NewNavBar);

//styled components
export const Wrapper = styled(flexBoxCenter)`
position: fixed;
z-index: 2;
width: 100%;
/* background-image: linear-gradient(#FFFFFF, #E3E3E3, #E3E3E3); */
background-color: ${({Scrolled})=>Scrolled ? 'blur(4px)' : 'rgb(255,255,255, 0.95)'};
height: 70px;
/* blur */
`;

export const NavContainer = styled(flexBoxCenter)`
justify-content: space-between;
width: 80%;
height: 70%;
`;
export const Logo = styled.img`
height: 100%;
`;

export const DropdownButton = styled.button`
width:100px;
height:80px;
`;
