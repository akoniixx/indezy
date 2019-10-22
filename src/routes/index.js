import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Guest from './guest';
import Main from './main';

class App extends Component {
    render() {
        const { match, user } = this.props;
        let isLoggedIn = false;
        try{
            isLoggedIn = user.email != null;
        }catch(err){}
        return (
            <Fragment>
                <Switch>
                    {/* Register your global routes here. */}
                    <Route path={`${match.url}`} component={isLoggedIn ? Main : Guest} />
                </Switch>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user
});

export default connect(mapStateToProps)(App);