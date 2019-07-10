import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import NavigationBar from 'Containers/navbar';
import Home from './home';
import Footer from './footer';
import { GlobalStyleGuest } from 'Components/css';

class MainApp extends Component {

    constructor(props) {
        super(props);
        this.onNavItemClick = this.onNavItemClick.bind(this);
    }

    onNavItemClick(ref, event) {
        event.preventDefault();
        scrollToComponent(
            this[ref],
            { align: 'top', offset: 60 }
        );
    }

    render() {
        const { match, locale, history } = this.props;
        return (
            <Fragment>
                <GlobalStyleGuest />
                <Headroom ref={(a) => { this.headroom = a }}>
                    <NavigationBar onNavItemClick={this.onNavItemClick} history={history} />
                </Headroom>
                <main>
                    <Switch>
                        <Route path={`${match.url}`} component={Home} />
                        {/* <Redirect to={`/${urls.error}`} /> */}
                    </Switch>
                </main>
                <Footer locale={locale} ref={(x) => this.footer = x} />
            </Fragment>
        );
    }
}

const mapStateToProps = ({ settings }) => (
    { locale: settings.locale }
);

export default connect(mapStateToProps)(MainApp);