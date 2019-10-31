import React, { Component, Fragment } from 'react';
import { toggleModal, openModal, login, closeModal } from 'Redux/actions';
import { ModalBody } from 'reactstrap'
import { connect } from 'react-redux';
import styled from 'styled-components';
import LoginModal from 'Components/LoginModal';
import { flexBoxColCenter, flexBoxCenter, flexBox, flexBoxCol } from 'Containers/flexbox';

const MenuModal = props => {
    const { isOpen, toggleModal, openModal, closeModal, display } = props;
    // console.log(isOpen);
    return (
        <Fragment>
            <ModalWrapper isVisible={isOpen.menuModal ? 'block' : 'none'}>
                <ModalBody style={{
                    backgroundColor: '#0C0D26'
                }}>
                    <MenuContainer>
                        <ExitButton src="assets/img/cross.png" onClick={() => closeModal('menuModal')} />
                        <MenuBox>
                            <MenuHeaderText onClick={() => openModal('loginModal')}>
                                LOGIN
                        </MenuHeaderText>
                            <WhiteHorizonLine />
                            <MenuText>
                                All indezy
                        </MenuText>
                            <MenuText>
                                Our Goal
                        </MenuText>
                            <MenuText>
                                Supporter
                        </MenuText>
                            <MenuText>
                                Contract Us
                        </MenuText>
                        </MenuBox>
                    </MenuContainer>
                </ModalBody>
            </ModalWrapper>
            <LoginModal />
        </Fragment>
    );
}

const mapStateToProps = ({ modals }) => (
    { isOpen: modals }
);

export default connect(mapStateToProps, { toggleModal, openModal, login, closeModal })(MenuModal);

const ModalWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: #0C0D26;
z-index: 3;
padding: 0 10%;
display: ${({ isVisible }) => isVisible};
`;

const MenuContainer = styled(flexBoxCol)`
`;

const MenuText = styled.span`
color: #FFFFFF;
font: 1.5625rem/4.75rem Helvetica;
cursor: pointer;
`;

const MenuHeaderText = styled.span`
color: #FFFFFF;
font: bold 1.5625rem/4.75rem Helvetica;
cursor: pointer;
`;

const WhiteHorizonLine = styled.div`
height: 2px;
background-color: #FFFFFF;
width: 100%;
`;

const ExitButton = styled.img`
width: 50px;
height: 50px;
margin-left: auto;
margin-top: 2%;
cursor: pointer;
`;

const MenuBox = styled(flexBoxCol)`
width: 500px;
& > :nth-child(n+2):nth-child(-n+3){
    margin-top: 4%;
}

`;