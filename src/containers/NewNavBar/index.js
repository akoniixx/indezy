import React, { useEffect, useState, Component, Fragment } from 'react';
import { changeLocale, toggleModal, openModal } from 'Redux/actions';
import { connect } from 'react-redux';
import MenuModal from 'Components/MenuModal';
//import for styled
import styled from 'styled-components';
import { flexBoxColCenter, flexBoxCenter, flexBox } from 'Containers/flexbox';

const NewNavBar = props => {
    const { openModal } = props;
    const [Scrolled, setScrolled] = useState(true);
    const handler = () => window.pageYOffset <= 700 ? setScrolled(true) : setScrolled(false);
    useEffect(() => {
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);
    let logoImg = 'assets/img/';
    let Hamburger = 'assets/img/';
    Scrolled ? logoImg = logoImg + 'IndezyLogo-05.svg' : logoImg = logoImg + 'square-logo-color.svg'
    Scrolled ? Hamburger = Hamburger + 'white-hamburger.svg' : Hamburger = Hamburger + 'black-hamburger.svg'
    return (
        <Fragment>
            <Wrapper Scrolled={Scrolled}>
                <NavContainer>
                    <Logo src={logoImg} />
                    <DropdownButton src={Hamburger} onClick={() => openModal('menuModal')} />
                    <MenuModal/>
                </NavContainer>
            </Wrapper>
        </Fragment>
    );
}


const mapStateToProps = ({ modals }) => (
    { isOpen: modals.menuModal, isOpen: modals.loginModal }
);

export default connect(mapStateToProps, { toggleModal, openModal })(NewNavBar);

//styled components
export const Wrapper = styled(flexBoxCenter)`
position: fixed;
z-index: 2;
width: 100%;
/* background-image: linear-gradient(#FFFFFF, #E3E3E3, #E3E3E3); */
background-color: ${({ Scrolled }) => Scrolled ? 'blur(4px)' : 'rgb(255,255,255, 0.95)'};
height: 70px;
transition: 0.8s;
/* blur */
`;

export const NavContainer = styled(flexBoxCenter)`
justify-content: space-between;
width: 80%;
height: 70%;
`;

export const Logo = styled.img`
height: 100%;
cursor: pointer;
`;

export const DropdownButton = styled.img`
height: 50%;
cursor: pointer;
`;
