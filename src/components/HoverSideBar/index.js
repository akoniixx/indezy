import React, { Fragment , useEffect} from 'react';
import styled from 'styled-components';
import { flexBoxColCenter, flexBoxCenter, flexBox, flexBoxCol } from 'Containers/flexbox';
import { toggleModal, openModal, login, closeModal } from 'Redux/actions';
import { connect } from 'react-redux';



const HoverSideBar = props => {
    const { isOpen, toggleModal, openModal, closeModal } = props;
    console.log(isOpen, "fuck");
    useEffect(() => {
        //Todo check 2 Modal to open only 1
    }, [isOpen['emailPopup'], isOpen['contactPopup']]);
    //* close page remove listener
    useEffect(() => {
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
        console.log("kuy", e.target.className);
        if (e.target.className != 'exception') {
            closeModal('emailPopup');
            closeModal('contactPopup');
            window.removeEventListener('click', handlerClickEvent)
        }
    }
    const itemText = [
        {
            img: 'assets/img/facebook-logo.png',
            text1: 'Our',
            text2: 'facebook',
            handler: () => window.open("https://www.facebook.com", '_blank')
        },
        {
            img: 'assets/img/facebook-logo.png',
            text1: 'Email',
            text2: 'address',
            bg: '#F47529',
            popupName: 'emailPopup',
            handler: (e) => handler('emailPopup', e)
        },
        {
            img: 'assets/img/facebook-logo.png',
            text1: 'Contact',
            text2: 'us',
            popupName: 'contactPopup',
            handler: (e) => handler('contactPopup', e)
        }
    ]

    const popup = [
        {

        },
        {
            headerText: 'Email Alert',
            body: <Fragment>
                <EmailInput type="email" placeholder="Enter your Email." />
                <SubmitButton>
                    <ItemText>Submit</ItemText>
                </SubmitButton>
            </Fragment>
        },
        {
            headerText: 'Contact us',
            body: <Fragment>
                <ContactBox>
                    <ContactIcon src={itemText.img} />
                    <ContactInfo>
                        <InfoBold>Hi</InfoBold>
                        <InfoText>test</InfoText>
                    </ContactInfo>
                </ContactBox>
                <ContactBox>
                    <ContactIcon src={itemText.img} />
                    <ContactInfo>
                        <InfoBold>Hi</InfoBold>
                        <InfoText>test</InfoText>
                    </ContactInfo>
                </ContactBox>
            </Fragment>
        }
    ]
    return (
        <HoverContainer>
            {itemText.map(
                (item, i) => {
                    console.log('fuck', isOpen[item.popupName], item.popupName)
                    return (
                        <Item key={i} bg={item.bg} onClick={(e)=>item.handler(e)} className="exception">
                            {/* //* no popup at first component */}
                            {i == 0 ? '' :
                                <Popup isOpen={isOpen[item.popupName]}>
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

const mapStateToProps = ({ modals }) => (
    { isOpen: modals }
);

export default connect(mapStateToProps, { toggleModal, openModal, login, closeModal })(HoverSideBar);

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
font-size: 0.8em;
`;

const Popup = styled(flexBoxCol)`
align-content:'center';
position: absolute;
right: ${({ isOpen }) => isOpen ? "0" : "-300px"};
top: 0;
background-color: #F0F0F0;
z-index: 2;
width: 300px;
height: 170px;
border-radius: 10px 0 0 10px;
transition: 0.8s;
`;

const PopupHeader = styled(flexBoxCenter)`
background-color: #F47529;
border-top-left-radius: 10px;
width: 100%;
height: 30%;
`;

const PopupBody = styled(flexBoxColCenter)`
width: 100%;
height: 80%;
`;

const EmailInput = styled.input`
border-radius: 10px;
padding: 0 8px 0 8px;
height: 30%;
width: 90%;
margin-bottom: 5%;
`;

const SubmitButton = styled.button`
background-color: #F47529;
border-radius: 10px;
border: none;
width: 70%;
height: 30%;
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
font-weight: bold;
`;

const InfoText = styled.span`

`;