import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from 'Redux/store';
import MainApp from 'Routes';
import 'antd/dist/antd.css';
import 'Assets/css/style.css';
import 'Assets/css/bootstrap.min.css';

const App = () => (
    <Provider store={store()}>
        <Router>
            <Switch>
                <Route path="/" component={MainApp} />
            </Switch>
        </Router>
    </Provider>
);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);