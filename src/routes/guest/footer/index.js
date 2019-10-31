import React, { Component } from 'react';
import {
    Footer as StyledFooter,
    ContactFooter,
    Copyright,
    FooterColContainer,
    FooterContainer,
    FooterHeaderText,
    FooterIcon,
    EmailInput
} from 'Components/guest/footer';
import lang from 'Lang';
import { Icon } from 'antd';
import { margin, padding } from 'Constants/defaultValues';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }
    handleChange = (e) => {
        //this.props.myChange(e.target.value);
        //console.log('onChange triggered',e)
        this.setState({ email: e.target.value });
    }
    sendEmailSubcribe = () => {
        //console.log(this.state.email);
        //do send email to server
    }
    render() {
        const { locale } = this.props;
        const strings = lang(locale).footer;
        console.log(this.state.email);
        return (
            <StyledFooter className="footer">
                <FooterContainer>
                    <ContactFooter>
                        <FooterHeaderText>Have a Question?</FooterHeaderText>
                        <div style={{ display: "flex" }}>
                            <FooterIcon src='assets/img/location-pin.svg' style={{ top: "5px" }} />
                            <span>{strings.address}</span>
                        </div>
                        <div style={{ display: "flex", margin: "1rem 0" }}>
                            <FooterIcon src='assets/img/phone-footer.svg' />
                            <span style={{ alignSelf: "center" }}>{strings.tel}</span>
                        </div><div style={{ display: "flex" }}>
                            <FooterIcon src='assets/img/envelope.svg' />
                            <span>Indezy@gmail.com</span>
                        </div>
                    </ContactFooter>
                    <ContactFooter style={{ marginLeft: '5%' }}>
                        <FooterHeaderText>Subsribe us!</FooterHeaderText>
                        {/* <form> */}
                        <EmailInput type="email" placeholder="Enter email address" value={this.state.email}
                            onChange={this.handleChange}
                        />

                        <button style={{ backgroundColor: "#F47529", border: "none", padding: "8px", borderRadius: 10 }} onClick={this.sendEmailSubcribe}>
                            <span style={{
                                fontFamily: '1.125rem/4.75rem Helvetica Neue Medium'
                            }}>Submit</span>
                        </button>
                        {/* </form> */}
                    </ContactFooter>
                </FooterContainer>
                <Copyright><span align="center">Copyright ©2019 Indezy PRODUCTS CO., LTD. All rights reserved.</span></Copyright>
            </StyledFooter>
        );
    }
}

export default Footer;