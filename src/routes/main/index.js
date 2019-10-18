import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyleMain as GlobalStyle } from 'Components/css';
import Navigationbar from './navbar';

class Main extends React.Component {

    onNavItemClick = (ref, e) => {
        e.preventDefault();
        scrollToComponent(this[ref], {});
    }

    render() {
        const { match, history } = this.props;
        return (
            <Fragment>
                <GlobalStyle />
                <Headroom ref={x => this.headroom = x}>
                    <Navigationbar onNavItemClick={this.onNavItemClick} history={history} />
                </Headroom>
                <main>
                    {/* <Switch>
                    </Switch> */}
                </main>
            </Fragment>
        );
    }
}

export default Main;