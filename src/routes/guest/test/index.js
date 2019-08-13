import React, { Component, Fragment } from 'react';
//import connect from 'react-redux';
import styled from 'styled-components';
import Topbar from './Topbar';
import Contents from './Contents';
import Footer from './Footer';
const Text = styled.span`
font-size: 30px;
color: ${({ color }) => color};
`;
class Main extends Component {
    render() {
        const x = 1213131;
        var myStyle={
            fontSize:200,
            color:'#FF0000'
        }
        return (
            <Fragment>
                <Topbar/>
                <Contents name="Punch" lastName="Bui"w/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Main;