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

const StarContainer = styled(flexBoxCenter)`
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
    // console.log(`slide transition from ${oldIndex-1} to ${newIndex-1}`);
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
                                <img src="assets/img/employee1.png" style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <StarContainer>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </StarContainer>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        fontSize:'1.6em',
                                        fontWeight:'bold',
                                        color: '#FFFFFF',
                                    }}>
                                        P.Taer
                                    </span>
                                    <span style={{
                                        color: '#797979',
                                        fontSize:'1.3em'
                                    }}>
                                        ดีขึ้น เพราะว่าไม่ต้องมาดูตลอดเวลา
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
                                <img src="assets/img/gittipong.png" style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <StarContainer>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </StarContainer>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        fontSize:'1.6em',
                                        fontWeight:'bold',
                                        color: '#FFFFFF',
                                    }}>
                                        Gittipong Sinthorn
                                    </span>
                                    <span style={{
                                        color:'#797979',
                                        fontSize:'1.3em'
                                    }}>
                                        ดีจัง ทีมีระบบนี้ สนับสนุนต่อไปให้มีอนาคตครับ
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
                                <img src="assets/img/employee1.png" style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <StarContainer>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </StarContainer>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        fontSize:'1.6em',
                                        fontWeight:'bold',
                                        color: '#FFFFFF',
                                    }}>
                                        P.Taer
                                    </span>
                                    <span style={{
                                        color: '#797979',
                                        fontSize:'1.3em'
                                    }}>
                                        ดีขึ้น เพราะว่าไม่ต้องมาดูตลอดเวลา
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
                                <img src="assets/img/gittipong.png" style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius:'50%',
                                        marginBottom:'12px',
                                }}/>
                                <StarContainer>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </StarContainer>
                            </ProfileContainer>
                                <OrangeVerticalLine/>
                                <CommentContainer>
                                    <span style={{
                                        fontSize:'1.6em',
                                        fontWeight:'bold',
                                        color: '#FFFFFF',
                                    }}>
                                        Gittipong Sinthorn
                                    </span>
                                    <span style={{
                                        color:'#797979',
                                        fontSize:'1.3em'
                                    }}>
                                        ดีจัง ทีมีระบบนี้ สนับสนุนต่อไปให้มีอนาคตครับ
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