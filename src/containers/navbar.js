import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeLocale } from 'Redux/actions';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import {
    NavigationBar as Nav,
    Logo,
    NavItemsGroup,
    NavItem,
    NavItemGreen,
    MenuMobileButtonWrapper
} from 'Components/guest/navbar';
import {GuestButton as Button , ButtonToCP} from 'Components/guest/buttons';
import LanguageSwitcher from 'Components/guest/languageSwitcher';
import urls from 'Constants/urls';
import * as utils from 'Utils';
import { screenWidth } from 'Constants/defaultValues';
import lang from 'Lang';
import { Dropdown, Menu } from 'antd';

class NavigationBar extends Component {

    render() {
        const { locale, history } = this.props;
        const strings = lang(locale);
        const nav = strings.nav;
        const changeLocale = this.props.changeLocale;
        const onNavItemClick = this.props.onNavItemClick;
        return (
            <Nav>
                <Logo
                    src="/assets/img/Ezytripslogo.png" />
                <NavItemsGroup>
                    <Media query={{
                        minWidth: screenWidth.desktop.minWidth
                    }}>
                        <Fragment>
                            <NavItemGreen onClick={
                                (e) => { onNavItemClick("book", e); }
                            }>
                                {nav.bookingTrip}
                            </NavItemGreen>
                            <NavLink to="#">
                                <NavItem>
                                    {nav.activities}
                                </NavItem>
                            </NavLink>
                            <NavLink to="#">
                                <NavItem>
                                    {nav.attractions}
                                </NavItem>
                            </NavLink>
                            <NavItem onClick={
                                (e) => { onNavItemClick("footer", e); }
                            }>
                                {nav.contact}
                            </NavItem>
                        </Fragment>
                    </Media>
                    <Button>{nav.bookButton}</Button>
                    <ButtonToCP
                        onClick={() => utils.changePath(history, urls.contentProvider)}>
                        {nav.cpButton}
                    </ButtonToCP>
                    <LanguageSwitcher
                        currentLocale={locale}
                        changeLocale={changeLocale} />
                    <Media query={{
                        maxWidth: screenWidth.tablet.maxWidth
                    }}>
                        <NavBarMobile
                            strings={strings}
                            changeLocale={changeLocale}
                            locale={locale}
                            onNavItemClick={onNavItemClick} />
                    </Media>
                </NavItemsGroup>
            </Nav>
        );
    }
}

class NavBarMobile extends Component {

    render() {
        const { strings, onNavItemClick } = this.props;
        const nav = strings.nav;
        const menu = (
            <Menu>
                <Menu.Item>
                    <NavItemGreen
                        onClick={
                            (e) => { onNavItemClick("book", e); }
                        }>
                        {nav.bookingTrip}
                    </NavItemGreen>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="#">
                        <NavItem>
                            {nav.activities}
                        </NavItem>
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="#">
                        <NavItem>
                            {nav.attractions}
                        </NavItem>
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavItem
                        onClick={
                            (e) => { onNavItemClick("footer", e); }
                        }>
                        {nav.contact}
                    </NavItem>
                </Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <MenuMobileButtonWrapper>
                    <i className="simple-icon-menu" />
                </MenuMobileButtonWrapper>
            </Dropdown>
        );
    }
}
const mapStateToProps = ({ settings }) => ({
    locale: settings.locale
});

export default connect(mapStateToProps, { changeLocale })(NavigationBar);