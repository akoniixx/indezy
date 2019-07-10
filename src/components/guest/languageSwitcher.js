import React, { Component } from 'react';
import styled from 'styled-components';
import { localeOptions } from 'Constants/defaultValues';
import { Menu, Dropdown, Icon } from 'antd';
import _ from 'lodash';
import lang from 'Lang';

class LanguageSwitcher extends Component {
    render() {
        const currentLocale = this.props.currentLocale;
        const changeLocale = this.props.changeLocale;
        const strings = lang(currentLocale);
        const nav = strings.nav;
        const menu = (
            <Menu>
                {
                    localeOptions.map(
                        (locale, i) => (
                            <Menu.Item
                                key={i}
                                onClick={() => changeLocale(locale.id)} >
                                <span>{locale.name}</span>
                            </Menu.Item>
                        )
                    )
                }
            </Menu>
        );
        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <LSWrapper>
                    <span>{nav.language}</span>
                    <Icon type="down" />
                </LSWrapper>
            </Dropdown>
        );

    }
}

const LSWrapper = styled.div`
cursor: pointer;
`;

export default LanguageSwitcher;