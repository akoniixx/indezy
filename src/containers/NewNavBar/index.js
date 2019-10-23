import React, { Component, Fragment } from 'react';
import {
    Wrapper,
    Logo,
    NavContainer,
    DropdownButton
} from 'Components/NewNavbar';
import {DropdownButton as Button } from 'Components/guest/buttons';

class NewNavBar extends Component {
    render() {
        return (
            <Fragment>
                <Wrapper>
                    <NavContainer>
                        <Logo src="assets/img/IndezyLogo.svg"/>
                        <Button>Menu</Button>
                    </NavContainer>
                </Wrapper>
            </Fragment>
        );
    }
}


export default NewNavBar;