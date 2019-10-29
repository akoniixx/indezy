import React, { Component, Fragment } from 'react';
import {
    Container,
    ContainerLine,
    ContainerWrapper,
    SubContainer,
    SubColContainer,
    RowContainer,
    BlueHorizonLine,
    BlueVerticleLine,
    OrangeHorizonLine,
    OrangeVerticalLine,
    Star,
    IntroduceText,
    IntroduceText1,
    IntroduceText2
} from 'Components/BlinkLandingPage';
import SlideShow from 'Components/SlideShow';
import HoverSideBar from 'Components/HoverSideBar';
import RatingContainer from 'Components/RatingContainer';

class blinkLandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { reference } = this.props;
        return (
            <Fragment>
                <ContainerLine>
                    <IntroduceText>
                        <IntroduceText1>IoT to Business</IntroduceText1>
                        <IntroduceText2>" REALTIME SYSTEM "</IntroduceText2>
                    </IntroduceText>
                    <SlideShow/>
                    <HoverSideBar/>
                    <ContainerWrapper style={{
                        backgroundImage: 'url(assets/img/network-3424070_1920.jpg)',
                        backgroundPosition: 'center',
                    }}>
                        <Container>
                            <span style={{
                                color:'#FFFFFF',
                                fontSize:'2.5em',
                                fontWeight:'Bold'
                            }}>
                                SOLUTION HIGHLIGHT
                                <BlueHorizonLine/>
                            </span>
                            <SubContainer>
                                <img src="assets/img/chip (1).png" style={{
                                    width: '100px',
                                    marginRight: '32px',
                                    objectFit: 'contain'
                                }}/>
                                <OrangeVerticalLine/>
                                <span style={{
                                color:'#FFFFFF',
                                width:'100%',
                                }}>
                                    1. สร้างมาเพื่อลดความซับซ้อนในการทำงานของระบบโรงงานในด้านต่างๆ และ เพิ่มประสิทธิภาพขึ้นถึง 80 %
                                </span>
                            </SubContainer>
                            <SubContainer>
                                <img src="assets/img/chip (1).png" style={{
                                    width: '100px',
                                    marginRight: '32px',
                                    objectFit: 'contain'
                                }}/>
                                <OrangeVerticalLine/>
                                <span style={{
                                color:'#FFFFFF',
                                width:'100%',
                                }}>
                                    2. ประหยัดเวลาในการทำงานของคนดูแลระบบของโรงงานอุตสาหกรรม ถึง 80 %
                                </span>
                            </SubContainer>
                            <SubContainer>
                                <img src="assets/img/chip (1).png" style={{
                                    width: '100px',
                                    marginRight: '32px',
                                    objectFit: 'contain'
                                }}/>
                                <OrangeVerticalLine/>
                                <span style={{
                                color:'#FFFFFF',
                                width:'100%',
                                }}>
                                    3. ทำเพื่อลดค่าใช้จ่ายต่างๆที่ไม่จำเป็น ถึง 50 %
                                </span>
                            </SubContainer>
                        </Container>
                    </ContainerWrapper>

                    <ContainerWrapper style={{
                        backgroundColor: '#050617',
                    }}>
                        <Container>
                            <span style={{
                                color:'#FFFFFF',
                                fontSize:'2.5em',
                                fontWeight:'Bold'
                            }}>
                                HOW IT WORK
                                <BlueHorizonLine/>
                            </span>
                            <RowContainer>
                                <SubColContainer>
                                    <img src="assets/img/chip-white.png" style={{
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '32px'
                                    }}/>
                                    <OrangeHorizonLine/>
                                    <span style={{
                                        color:'#FFFFFF'
                                    }}>
                                        1. ระบบที่ปรับการทำงานของโรงงานในแต่ละ case ให้มีประสิทธิภาพมากขึ้น เช่น ระบบบัดบัดน้ำเสีย ระบบเครื่องจักรต่างๆ เป็นต้น
                                    </span>
                                </SubColContainer>
                                <SubColContainer>
                                    <img src="assets/img/chip-white.png" style={{
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '32px'
                                    }}/>
                                    <OrangeHorizonLine/>
                                    <span style={{
                                        color:'#FFFFFF'
                                    }}>
                                        2. ลดความซับซ้อน ลดเวลาในการจัดการของระบบที่มีอยู่ เนื่องจากมีดูข้อมูลและแจ้งเตือนผ่านเว็ปแอพของเรา
                                    </span>
                                </SubColContainer>
                                <SubColContainer>
                                    <img src="assets/img/chip-white.png" style={{
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '32px'
                                    }}/>
                                    <OrangeHorizonLine/>
                                    <span style={{
                                        color:'#FFFFFF'
                                    }}>
                                        3. ระบบที่ทำให้คุณ ลดค่าใช้จ่ายที่ไม่จำเป็นออก เช่น ค่าสารเคมีที่ลดลงหลังจากใช้ระบบ เป็นต้น
                                    </span>
                                </SubColContainer>
                            </RowContainer>
                        </Container>
                    </ContainerWrapper>

                    <ContainerWrapper style={{
                        backgroundColor: '#050617'
                    }}>
                        <Container>
                            <span style={{
                                color:'#FFFFFF',
                                fontSize:'2.5em',
                                fontWeight:'Bold'
                            }}>
                                TESTIMONIAL
                                <BlueHorizonLine/>
                            </span>
                            <SubContainer>
                                <span style={{
                                    fontSize:'4.5em',
                                    color:'#FFFFFF',
                                    marginRight:'24px'
                                }}>
                                    4.2
                                </span>
                                <RowContainer>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/star.png"/>
                                    <Star src="assets/img/half_star.png"/>
                                </RowContainer>
                            </SubContainer>
                            <span style={{
                                color: '#797979',
                                fontSize: '1.3em'
                            }}>
                                FROM 2 CUSTOMERS
                            </span>
                            <RowContainer style={{
                                width: '80%',
                                position:'relative',
                                margin:'auto'
                            }}>
                                <RatingContainer/>
                            </RowContainer>
                        </Container>
                    </ContainerWrapper>

                    <ContainerWrapper style={{
                        backgroundImage: '#FFFFFF',
                    }}>
                        <Container>
                            <span style={{
                                color:'#000000',
                                fontSize:'2.5em',
                                fontWeight:'Bold'
                            }}>
                                SUPPORTER
                                <BlueHorizonLine/>
                            </span>
                            <RowContainer>
                                <img src="assets/img/partners/EzygroupLogo-04.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }}/>
                                <img src="assets/img/partners/logoezyplant2.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }}/>
                                <img src="assets/img/partners/nsc_logo.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }}/>
                            </RowContainer>
                            <RowContainer>
                                <img src="assets/img/partners/startup_logo.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }}/>
                                <img src="assets/img/partners/startup-academy-logo.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }}/>
                                <img src="assets/img/partners/su_logo.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }}/>
                            </RowContainer>
                        </Container>
                    </ContainerWrapper>

                </ContainerLine>
            </Fragment>
        );
    }
}

export default blinkLandingPage;