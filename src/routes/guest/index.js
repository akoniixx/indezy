import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import NavigationBar from 'Containers/navbar';
import Footer from './footer';
import { GlobalStyleGuest } from 'Components/css';
import urls from 'Constants/urls';
import LandingPage from 'Containers/blinkLandingPage';
import { closeModal } from 'Redux/actions';

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

    componentDidMount() {
        this.props.closeModal("loginModal");
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

export default connect(mapStateToProps, { closeModal })(MainApp);