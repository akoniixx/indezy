import React from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';
 
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
                        backgroundImage: 'linear-gradient(to bottom right, #0a0a0a, #000000)',
                        height:'700px',
                        display:'flex',
                        justifyContent:'flex-end',
                        alignItems:'center'
                    }}>
                        <div style={{
                            margin:'64px',
                            display:'flex',
                            flexDirection:'column'
                        }}>
                            <span style={{
                                color:'#FFFFFF',
                                fontSize:'3.5em',
                                fontWeight:'Bold',
                                textAlign:'right'
                            }}>
                                BUSSINESS
                            </span>
                            <span style={{
                                color:'#FFFFFF',
                                fontSize:'3.5em',
                                fontWeight:'Bold',
                                textAlign:'right'
                            }}>
                                INTELLIGENCE
                            </span>
                            <span style={{
                                color:'#00C3FD',
                                fontSize:'6em',
                                fontWeight:'Bold',
                                textAlign:'right'
                            }}>
                                " REALTIME
                            </span>
                            <span style={{
                                color:'#00C3FD',
                                fontSize:'6em',
                                fontWeight:'Bold',
                                textAlign:'right'
                            }}>
                                SYSTEM "
                            </span>
                        </div>
                    </div>

                    <div className="each-slide" style={{
                        backgroundImage: 'linear-gradient(to bottom right, #0a0a0a, #000000)',
                        height:'700px',
                        display:'flex',
                        justifyContent:'flex-end',
                        alignItems:'center'
                    }}>
                        <div style={{
                            margin:'64px',
                            display:'flex',
                            flexDirection:'column'
                        }}>
                            <span style={{
                                color:'#FFFFFF',
                                fontSize:'3.5em',
                                fontWeight:'Bold',
                                textAlign:'right'
                            }}>
                                BUSSINESS
                            </span>
                            <span style={{
                                color:'#FFFFFF',
                                fontSize:'3.5em',
                                fontWeight:'Bold',
                                textAlign:'right'
                            }}>
                                INTELLIGENCE
                            </span>
                            <span style={{
                                color:'#00C3FD',
                                fontSize:'6em',
                                fontWeight:'Bold',
                                textAlign:'right'
                            }}>
                                " REALTIME
                            </span>
                            <span style={{
                                color:'#00C3FD',
                                fontSize:'6em',
                                fontWeight:'Bold',
                                textAlign:'right'
                            }}>
                                SYSTEM "
                            </span>
                        </div>
                    </div>

                    
                </Slide>
            </div>
        );
    }
}