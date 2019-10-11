import React from 'react';
import { Slide,Fade } from 'react-slideshow-image';
import styled from 'styled-components';
import {
    SubContainer,
    OrangeVerticalLine,
    RowContainer
} from 'Components/BlinkLandingPage';
import {flexBoxColCenter,flexBoxCenter,flexBox,flexBoxCol} from 'Containers/flexbox';
 
// styled
const Star = styled.img`
width: 10px;
height: 10px;
margin-left: 3px;
margin-right: 3px;
`;

const ProfileContainer = styled(flexBoxColCenter)`

`;

const CommentContainer = styled(flexBoxCol)`
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
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex-1} to ${newIndex-1}`);
  }
}

export default class RatingContainer extends React.Component {
    render(){
        return (
            <div style={{
                width: '80%'
            }}>
                <div className="slide-container">
                    <Fade {...properties}>

                    <div className="each-slide" style={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignContent:'center',
                        margin:'32px'
                    }}>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src="assets/img/john.jpg" style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <flexBoxCenter>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </flexBoxCenter>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        fontSize:'1.6em',
                                        fontWeight:'bold'
                                    }}>
                                        John Wick
                                    </span>
                                    <span style={{
                                        color:'#A9A9A9',
                                        fontSize:'1.3em'
                                    }}>
                                        เยี่ยมสัสหมาเลยค้าบ
                                    </span>
                                </CommentContainer>
                        </RowContainer>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src="assets/img/joker.jpg" style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <flexBoxCenter>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </flexBoxCenter>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        fontSize:'1.6em',
                                        fontWeight:'bold'
                                    }}>
                                        Arthur Fleck
                                    </span>
                                    <span style={{
                                        color:'#A9A9A9',
                                        fontSize:'1.3em'
                                    }}>
                                        ตั้งแต่ใช้ Indezy ผมก็ไม่หดหู่อีกเลยค้าบ
                                    </span>
                                </CommentContainer>
                        </RowContainer>
                    </div>
                    
                    <div className="each-slide" style={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignContent:'center',
                        margin:'32px'
                    }}>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src="assets/img/ben.jpg" style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <flexBoxCenter>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </flexBoxCenter>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        fontSize:'1.6em',
                                        fontWeight:'bold'
                                    }}>
                                        P.beng
                                    </span>
                                    <span style={{
                                        color:'#A9A9A9',
                                        fontSize:'1.3em'
                                    }}>
                                        ลูกน้องผมอู้อีกละคับ
                                    </span>
                                </CommentContainer>
                        </RowContainer>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src="assets/img/champ.jpg" style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <flexBoxCenter>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </flexBoxCenter>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        fontSize:'1.6em',
                                        fontWeight:'bold'
                                    }}>
                                        P.Champ
                                    </span>
                                    <span style={{
                                        color:'#A9A9A9',
                                        fontSize:'1.3em'
                                    }}>
                                        ก็มาดิคับ! เหมือนหล่ออ่ะไอเวร วุ้วๆๆๆๆ
                                    </span>
                                </CommentContainer>
                        </RowContainer>
                    </div>

                    <div className="each-slide" style={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignContent:'center',
                        margin:'32px'
                    }}>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src="assets/img/islam.jpg" style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <flexBoxCenter>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </flexBoxCenter>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        fontSize:'1.6em',
                                        fontWeight:'bold'
                                    }}>
                                        Islam
                                    </span>
                                    <span style={{
                                        color:'#A9A9A9',
                                        fontSize:'1.3em'
                                    }}>
                                        ใช้ indezy แล้วผมก็ไม่กินหมูอีกเลยคับ
                                    </span>
                                </CommentContainer>
                        </RowContainer>
                        <RowContainer style={{
                            width:'50%',
                            alignItems:'unset'
                        }}>
                            <ProfileContainer style={{
                                marginRight: '32px',
                                width:'100px'
                            }}>
                                <img src="assets/img/mark.jpg" style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <flexBoxCenter>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </flexBoxCenter>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        fontSize:'1.6em',
                                        fontWeight:'bold'
                                    }}>
                                        Mark sucker
                                    </span>
                                    <span style={{
                                        color:'#A9A9A9',
                                        fontSize:'1.3em'
                                    }}>
                                        เอา Facebook ผมไปทำแทนเถอะ!!!!
                                    </span>
                                </CommentContainer>
                        </RowContainer>
                    </div>
                    </Fade>
                </div>
            </div>
        );
    }
}