import React, { Component } from 'react';
import {
    Footer as StyledFooter,
    LogoFooter,
    ContactFooter
} from 'Components/guest/footer';
import lang from 'Lang';

class Footer extends Component {
    render() {
        const { locale } = this.props;
        const strings = lang(locale).footer;
        return (
            <StyledFooter className="footer">
                <LogoFooter
                    src="/assets/img/IndezyLogo.svg" />
                <ContactFooter>
                    <span>{strings.address}</span>
                    <span>{strings.tel}</span>
                </ContactFooter>
            </StyledFooter>
        );
    }
}

export default Footer;