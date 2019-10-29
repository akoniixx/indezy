import React, { Fragment, useState, useEffect } from 'react';
import Filter from './filter';
import Dashboard from './dashboard';
import PointSelector from './point';
import { connect } from 'react-redux';
import { setName, setRealTimePoint } from 'Redux/actions';
import { getFireBaseData } from 'Utils';
import * as firebaseRef from 'Constants/firebase';

const Overall = (props) => {
    const { firebase, setName, setRealTimePoint } = props;
    //* CDM
    useEffect(() => {
        getFireBaseData(firebaseRef.nameRef, setName);
        getFireBaseData(firebaseRef.pointRef, setRealTimePoint);
    }, []);
    const [point, setPoint] = useState(0);
    let totalPoints = 1;
    let data = {};
    try {
        data = firebase.point['01'][point + 1];
    } catch (error) {
        data = {};
    }
    try {
        totalPoints = Object.keys(firebase.point['01']).length - 1 //* This object contains a name value and point objects;
    } catch (error) {
        totalPoints = 1;
    }
    //* Firebase Listener
    // useEffect(() => {
    //     console.log('firebase', firebase)
    // }, [firebase]);
    // //* Point Listener
    // useEffect(() => {
    //     console.log('point set to', point);
    //     console.log('data set to', data);
    // }, [point, firebase]);
    const propPointSelector = {
        point, setPoint, totalPoints
    }
    const dashboardProps = data;
    return (
        <Fragment>
            <Filter />
            <PointSelector {...propPointSelector} />
            <Dashboard {...dashboardProps} />
        </Fragment>
    );
}

const mapStateToProps = ({ firebase }) => ({
    firebase: firebase
})

export default connect(mapStateToProps, { setName, setRealTimePoint })(Overall);