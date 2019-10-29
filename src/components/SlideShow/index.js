import React from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';
import { GlobalStyleMain as GlobalStyle } from 'Components/css';
 
// styled
const Item = styled.div`
background-color: '#000000';
`;

const slideImages = [
    "/assets/img/dashboardDemo.png",
    "/assets/img/dashboardDemo.png",
    "/assets/img/dashboardDemo.png"
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex-1} to ${newIndex-1}`);
  }
}

export default class SlideView extends React.Component {
    render(){
        return (
            <div className="slide-container" style={{
                width: '100%'
            }}>
                <Slide {...properties}>
                    <div className="each-slide" style={{
                        backgroundImage: 'url(assets/img/main-bg.jpg)',
                        height:'700px',
                        display:'flex',
                        justifyContent:'flex-end',
                        alignItems:'center',
                    }}>
                        <div className="each-slide" style={{
                            backgroundColor: '#000000',
                            height:'700px',
                            width:'100%',
                            opacity: '0.8'
                        }}/>
                    </div>

                    <div className="each-slide" style={{
                        backgroundImage: 'url(assets/img/light-1834289_1920.jpg)',
                        height:'700px',
                        display:'flex',
                        justifyContent:'flex-end',
                        alignItems:'center'
                    }}>
                        <div className="each-slide" style={{
                                backgroundColor: '#000000',
                                height:'700px',
                                width:'100%',
                                opacity: '0.8'
                        }}/>
                    </div>

                </Slide>
            </div>
        );
    }
}