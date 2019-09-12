import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import NavigationBar from 'Containers/navbar';
import LandingPage from 'Containers/landingPage';
import Home from './home';
import Footer from './footer';
import { GlobalStyleGuest } from 'Components/css';
import Chart from 'Containers/chart';
import urls from 'Constants/urls';
import Test from 'Routes/guest/test';
import newLandingPage from 'Routes/guest/newLandingPage'

class MainApp extends Component {

    constructor(props) {
        super(props);
        contentType: "home";
        this.onNavItemClick = this.onNavItemClick.bind(this);

    }

    onNavItemClick(ref, event) {
        event.preventDefault();
        scrollToComponent(
            this[ref],
            {}
        );
        console.log("scrolling", ref);
    }

    render() {
        const { match, locale, history } = this.props;
        return (
            <Fragment>
                <GlobalStyleGuest />
                <Headroom ref={(a) => { this.headroom = a }}>
                    <NavigationBar onNavItemClick={this.onNavItemClick} history={history} />
                </Headroom>
                <main className="main" ref={(e) => this.headroom = e}>
                    <Switch>
                        <Route path={`${match.url}${urls.nlp}`} component={newLandingPage} history={history} />
                        <Route path={`${match.url}${urls.chart}`} component={Chart} history={history} />
                        <Route path={`${match.url}${urls.test}`} component={Test} history={history} />
                        <Route path={`${match.url}`} render={props => <LandingPage {...props} reference={(ref, event) => this[ref] = event} />} history={history} />
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