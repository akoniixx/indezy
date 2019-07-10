import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Guest from './guest';

class MainApp extends Component {
    render() {
        const { match } = this.props;
        return (
            <Fragment>
                <Switch>
                    {/* Register your global routes here. */}
                    <Route path={`${match.url}`} component={Guest} />
                </Switch>
            </Fragment>
        );
    }
}

export default MainApp;