import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { flexBoxColCenter, flexBoxCenter, flexBox, flexBoxCol } from 'Containers/flexbox';
import { toggleModal, openModal, login, closeModal, setName, setRealTimePoint } from 'Redux/actions';
import { connect } from 'react-redux';

import * as firebaseRef from 'Constants/firebase';
import { getFireBaseData } from 'Utils'


const HoverSideBar = props => {
    const { isOpen, toggleModal, openModal, closeModal, firebaseData } = props;
    const { factoryName, setRealTimePoint } = props; //* firebase action 
    console.log('firebaseData', firebaseData)
    //* get firebade data
    useEffect(() => {
        getFireBaseData(firebaseRef.nameRef, factoryName)//* set factory name 
        getFireBaseData(firebaseRef.pointRef, setRealTimePoint)//* set all point 
    }, []);
    useEffect(() => {
        //Todo check 2 Modal to open only 1
    }, [isOpen['emailPopup'], isOpen['contactPopup']]);
    //* close page remove listener
    useEffect(() => {
        getFireBaseData(firebaseRef.nameRef, factoryName)
        getFireBaseData(firebaseRef.pointRef, setRealTimePoint)
        return () => window.removeEventListener('click', handlerClickEvent)
    }, []);
    //* add close modal click outside component listener
    const handler = (key, e) => {
        openModal(key);
        e.stopPropagation();
        window.addEventListener('click', handlerClickEvent)
    }
    //* close modal methods
    const handlerClickEvent = (e) => {
        if (e.target.className != 'exception') {
            closeModal('emailPopup');
            closeModal('contactPopup');
            window.removeEventListener('click', handlerClickEvent)
        }
    }
    const itemText = [
        {
            img: 'assets/img/facebook.svg',
            text1: 'Our',
            text2: 'facebook',
            handler: () => window.open("https://www.facebook.com", '_blank')
        },
        {
            img: 'assets/img/subscribe-us.svg',
            text1: 'Subscribe',
            text2: 'Us',
            popupName: 'emailPopup',
            handler: (e) => handler('emailPopup', e),
            popupImg: 'assets/img/mail-black.svg',
            boxSize: '300px'
        },
        {
            img: 'assets/img/phone.svg',
            text1: 'Contact',
            text2: 'us',
            popupName: 'contactPopup',
            handler: (e) => handler('contactPopup', e),
            popupImg: 'assets/img/phone-black.svg'
        }
    ]

    const popup = [
        {

        },
        {
            headerText: 'Email Alert',
            body: <Fragment>
                <InputBox>
                    <InfoBold style={{ marginLeft: '10px' }}>Email</InfoBold>
                    <EmailInput type="email" placeholder="Enter your Email." />
                </InputBox>
                <InputBox>
                    <InfoBold style={{ marginLeft: '10px' }}>Phone</InfoBold>
                    <EmailInput type="tel" placeholder="Enter your Phone Number." />
                </InputBox>
                <SubmitButton onclick="">
                    <ItemText>Submit</ItemText>
                </SubmitButton>
            </Fragment>
        },
        {
            headerText: 'Contact us',
            body: <Fragment>
                <ContactBox style={{ marginBottom: 10 }}>
                    <ContactIcon src={itemText[1].popupImg} />
                    <ContactInfo>
                        <InfoBold>Email</InfoBold>
                        <InfoText>Indezy@gmail.com</InfoText>
                    </ContactInfo>
                </ContactBox>
                <ContactBox>
                    <ContactIcon src={itemText[2].popupImg} />
                    <ContactInfo>
                        <InfoBold>Phone</InfoBold>
                        <InfoText>+66 931787157</InfoText>
                    </ContactInfo>
                </ContactBox>
            </Fragment>
        }
    ]
    return (
        <HoverContainer>
            {itemText.map(
                (item, i) => {
                    return (
                        <Item key={i} bg={item.bg} onClick={(e) => item.handler(e)} className="exception">
                            {/* //* no popup at first component */}
                            {i == 0 ? '' :
                                <Popup isOpen={isOpen[item.popupName]} boxSize={item.boxSize}>
                                    <PopupHeader>
                                        <ItemText>{popup[i].headerText}</ItemText>
                                    </PopupHeader>
                                    <PopupBody>
                                        {popup[i].body}
                                    </PopupBody>
                                </Popup>
                            }
                            <IconItem src={item.img} />
                            <ItemText>{item.text1}</ItemText>
                            <ItemText>{item.text2}</ItemText>
                        </Item>
                    )
                }
            )}
        </HoverContainer>
    );
}

const mapStateToProps = ({ modals, firebase }) => (
    {
        isOpen: modals,
        firebaseData: firebase
    }
);

export default connect(mapStateToProps, { toggleModal, openModal, login, closeModal, factoryName: setName, setRealTimePoint })(HoverSideBar);

const HoverContainer = styled.div`
position: fixed;
right: 0;
top: 270px;
transition: 0.3s;
border-collapse: separate;
width: 90px;
box-shadow: 0 2px 7px 0 #F47529;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
display: flex;
flex-direction: column;
z-index:1;
font: 0.75rem/0.9375rem Helvetica Neue Medium;
& > *:first-child{
    border-top-left-radius: 10px;
}
& > *:last-child{
    border-bottom-left-radius: 10px;
}
`;

const Item = styled.div`
display: flex;
position: relative;
padding: 8px;
flex-direction: column;
background-Color: ${({ bg }) => bg ? bg : '#D15B14'};
cursor: pointer;
:hover {
    background-color: #F47529;
}
`;

const IconItem = styled.img`
height: 25px;
width: 25px;
margin-bottom: 8px;
`;

const ItemText = styled.span`
color: #FFFFFF;
`;

const Popup = styled(flexBoxCol)`
align-content:'center';
position: absolute;
right: ${({ isOpen }) => isOpen ? "0" : "-300px"};
top: 0;
background-color: #F0F0F0;
z-index: 2;
width: 300px;
height: ${({ boxSize }) => boxSize ? boxSize : '170px'};
border-radius: 10px 0 0 10px;
transition: 0.8s;
`;

const PopupHeader = styled(flexBoxCenter)`
background-color: #F47529;
border-top-left-radius: 10px;
width: 100%;
height: 50px;
`;

const PopupBody = styled(flexBoxColCenter)`
width: 100%;
height: 80%;
`;

const EmailInput = styled.input`
border-radius: 10px;
height: 40px;
width: 90%;
text-indent: 10px;
::placeholder {
  text-indent: 10px;
}
`;

const InputBox = styled(flexBoxCol)`
padding: 0 8px 0 8px;
margin-bottom: 5%;
width: 90%;
`;

const SubmitButton = styled.button`
background-color: #F47529;
border-radius: 10px;
border: none;
width: 70%;
height: 40px;
`;

const ContactBox = styled(flexBox)`
align-items: center;
width: 90%;
`;

const ContactIcon = styled.img`
height: 25px;
width: 25px;
margin: 0 7% 0 7%;
`;

const ContactInfo = styled(flexBoxCol)`

`;

const InfoBold = styled.span`
font: 700 15px/20px Helvetica Neue medium;
margin-bottom: 5px;
`;

const InfoText = styled.span`

`;