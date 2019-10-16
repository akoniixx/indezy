import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeLocale , toggleModal, openModal } from 'Redux/actions';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
    NavigationBar as Nav,
    Logo,
    NavItemsGroup,
    NavItem as ni,
    NavItemGreen,
    NavSpeechItem,
    MenuMobileButtonWrapper,
    LogoContainer
} from 'Components/guest/navbar';
import {GuestButton as Button , ButtonToCP} from 'Components/guest/buttons';
import LanguageSwitcher from 'Components/guest/languageSwitcher';
import urls from 'Constants/urls';
import * as utils from 'Utils';
import { screenWidth } from 'Constants/defaultValues';
import lang from 'Lang';
import { Dropdown, Menu } from 'antd';
import LoginModal from 'Components/LoginModal';
const NavItem = styled(ni)`
padding: 2rem 0.5rem 0 0.5rem;
`;

class NavigationBar extends Component {

    render() {
        const { locale, history } = this.props;
        const strings = lang(locale);
        const nav = strings.nav;
        const changeLocale = this.props.changeLocale;
        const onNavItemClick = this.props.onNavItemClick;
        const { isOpen, openModal } = this.props;

        return (
            <Nav>
                <Logo onClick={(e) => { utils.changePath(history, urls.landingPage); }} 
                src="/assets/img/Asset_2@3x.png" />

                <NavItemsGroup>
                    <Media query={{
                        minWidth: screenWidth.desktop.minWidth
                    }}>
                        <Fragment>
                            <NavItem onClick={
                                (e) => { onNavItemClick("introduce", e); }
                            }>
                                Home
                            </NavItem>

                            <NavItem onClick={ 
                                (e) => { onNavItemClick("what", e); }
                            }>
                                All in Indezy
                            </NavItem>

                            <NavItem onClick={ 
                                (e) => { onNavItemClick("card", e); }
                            }>
                                Goal
                            </NavItem>

                            <NavItem onClick={
                                (e) => { onNavItemClick("archiv", e); }
                            }>
                                Ratings and reviews
                            </NavItem>

                            <NavItem onClick={
                                (e) => { onNavItemClick("partner", e); }
                            }>
                                Supporter
                            </NavItem>

                            {/* <NavLink to="/Chart">
                                <NavItem>
                                    {nav.activities}
                                </NavItem>
                            </NavLink> */}
                            {/* <NavLink to="#">
                                <NavItem>
                                    {nav.attractions}
                                </NavItem>
                            </NavLink> */}
                                <NavItem onClick={
                                    (e) => { onNavItemClick("footer", e); }
                                }>
                                    Contact us
                                </NavItem>
                        </Fragment>
                    </Media>
                    {/* <Button>{nav.bookButton}</Button> */}
                    {/* <ButtonToCP style = {{color: '#F47529',fontSize: '1em'}}
                        onClick={() => utils.changePath(history, urls.chart)}>
                        {nav.charts}
                    </ButtonToCP> */}
                    {/* <NavEmailItem>
                        <div>Email <NavEmailInput/></div>
                        <div>Password <NavPasswordInput type = "Password"/></div>
                    </NavEmailItem> */}
                   
                    {/* <LanguageSwitcher
                        currentLocale={locale}
                        changeLocale={changeLocale} /> */}
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

                <Media query={{minWidth: screenWidth.desktop.minWidth}}>
                    <Button onClick={() => openModal('loginModal')} >
                        <span>Login</span>
                    </Button>
                </Media>
                <LoginModal/>
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
const mapStateToProps = ({ settings , modals }) => (
    { locale: settings.locale },
    { isOpen: modals.loginModal }
);

export default connect(mapStateToProps, { changeLocale , toggleModal , openModal })(NavigationBar);