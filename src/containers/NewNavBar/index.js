import React, { Component, Fragment } from 'react';
import {
    Wrapper,
    Logo,
    NavContainer,
    DropdownButton
} from 'Components/NewNavbar';
import { DropdownButton as Button } from 'Components/guest/buttons';
import { changeLocale, toggleModal, openModal } from 'Redux/actions';
import { connect } from 'react-redux';
import LoginModal from 'Components/LoginModal';

const NewNavBar = props => {
    const {openModal} = props;
    return (
        <Fragment>
            <Wrapper>
                <NavContainer>
                    <Logo src="assets/img/IndezyLogo.svg" />
                    <Button onClick={() => openModal('loginModal')}>Menu</Button>
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