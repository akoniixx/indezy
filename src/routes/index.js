import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal, checkToken } from 'Redux/actions';
import Guest from './guest';
import Main from './main';

const App = (props) => {
    const { match, closeModal, email, token, isLoggedIn, checkToken } = props;
    // console.log('email, token, isLoggedIn', email, token, isLoggedIn);
    useEffect(() => {
        checkToken(token);
    }, [token, checkToken]);
    if(isLoggedIn) closeModal('loginModal');
    return (
        <Fragment>
            <Switch>
                {/* Register your global routes here. */}
                <Route path={`${match.url}`} component={isLoggedIn ? Main : Guest} />
            </Switch>
        </Fragment>
    );
}

const mapStateToProps = ({ auth }) => ({
    email: auth.email,
    token: auth.token,
    isLoggedIn: auth.isTokenVerified
});

export default connect(mapStateToProps, { closeModal, checkToken })(App);