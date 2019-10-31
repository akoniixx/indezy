import React, { Component, Fragment } from 'react';
import {
    Container,
    ContainerLine,
    ContainerWrapper,
    ContainerHightlights,
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
                    <SlideShow />
                    <HoverSideBar />
                    <ContainerHightlights style={{
                        backgroundImage: 'url(assets/img/network-3424070_1920.jpg)'
                    }}>
                        <Container>
                            <span style={{
                                color: '#FFFFFF',
                                font: 'bold 2.5rem/4.75rem Helvetica'
                            }}>
                                SOLUTION HIGHLIGHTS
                                <BlueHorizonLine />
                            </span>
                            <SubContainer>
                                <img src="assets/img/chip-white.png" style={{
                                    width: '100px',
                                    marginRight: '32px',
                                    objectFit: 'contain'
                                }} />
                                <OrangeVerticalLine />
                                <span style={{
                                    color: '#FFFFFF',
                                    width: '100%',
                                    font: '0 1.125rem/1.25rem Helvetica Neue'
                                }}>
                                    1. สร้างมาเพื่อลดความซับซ้อนในการทำงานของระบบโรงงานในด้านต่างๆ และ เพิ่มประสิทธิภาพขึ้นถึง 80 %
                                </span>
                            </SubContainer>
                            <SubContainer>
                                <img src="assets/img/chip-white.png" style={{
                                    width: '100px',
                                    marginRight: '32px',
                                    objectFit: 'contain'
                                }} />
                                <OrangeVerticalLine />
                                <span style={{
                                    color: '#FFFFFF',
                                    width: '100%',
                                    font: '0 1.125rem/1.25rem Helvetica Neue'
                                }}>
                                    2. ประหยัดเวลาในการทำงานของคนดูแลระบบของโรงงานอุตสาหกรรม ถึง 80 %
                                </span>
                            </SubContainer>
                            <SubContainer>
                                <img src="assets/img/chip-white.png" style={{
                                    width: '100px',
                                    marginRight: '32px',
                                    objectFit: 'contain',
                                    font: '0 1.125rem/1.25rem Helvetica Neue'
                                }} />
                                <OrangeVerticalLine />
                                <span style={{
                                    color: '#FFFFFF',
                                    width: '100%',
                                }}>
                                    3. ทำเพื่อลดค่าใช้จ่ายต่างๆที่ไม่จำเป็น ถึง 50 %
                                </span>
                            </SubContainer>
                        </Container>
                    </ContainerHightlights>

                    <ContainerWrapper style={{
                        background: 'transparent radial-gradient(closest-side at 50% 50%, #000000CC 0%, #000017 100%) 0% 0% no-repeat padding-box'
                    }}>
                        <Container>
                            <span style={{
                                color: '#FFFFFF',
                                font: 'bold 2.5rem/4.75rem Helvetica'
                            }}>
                                HOW IT WORKS
                                <BlueHorizonLine />
                            </span>
                            <RowContainer style={{
                                color: '#A8A8A8'
                            }}>
                                <SubColContainer>
                                    <img src="assets/img/chip-white.png" style={{
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '32px'
                                    }} />
                                    <OrangeHorizonLine />
                                    <span>
                                        1. ระบบที่ปรับการทำงานของโรงงานในแต่ละ case ให้มีประสิทธิภาพมากขึ้น เช่น ระบบบัดบัดน้ำเสีย ระบบเครื่องจักรต่างๆ เป็นต้น
                                    </span>
                                </SubColContainer>
                                <SubColContainer>
                                    <img src="assets/img/chip-white.png" style={{
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '32px'
                                    }} />
                                    <OrangeHorizonLine />
                                    <span>
                                        2. ลดความซับซ้อน ลดเวลาในการจัดการของระบบที่มีอยู่ เนื่องจากมีดูข้อมูลและแจ้งเตือนผ่านเว็ปแอพของเรา
                                    </span>
                                </SubColContainer>
                                <SubColContainer>
                                    <img src="assets/img/chip-white.png" style={{
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '32px'
                                    }} />
                                    <OrangeHorizonLine />
                                    <span>
                                        3. ระบบที่ทำให้คุณ ลดค่าใช้จ่ายที่ไม่จำเป็นออก เช่น ค่าสารเคมีที่ลดลงหลังจากใช้ระบบ เป็นต้น
                                    </span>
                                </SubColContainer>
                            </RowContainer>
                        </Container>
                    </ContainerWrapper>

                    <ContainerWrapper style={{
                        background: 'transparent radial-gradient(closest-side at 50% 50%, #393939 0%, #000000 100%) 0% 0% no-repeat padding-box'
                    }}>
                        <Container>
                            <span style={{
                                color: '#FFFFFF',
                                font: 'bold 2.5rem/4.75rem Helvetica'
                            }}>
                                TESTIMONIALS
                                <BlueHorizonLine />
                            </span>
                            <SubContainer>
                                <span style={{
                                    color: '#FFFFFF',
                                    marginRight: '24px',
                                    font: '6rem/7.1875rem Helvetica Neue Light'
                                }}>
                                    4.2
                                </span>
                                <RowContainer>
                                    <Star src="assets/img/star.png" />
                                    <Star src="assets/img/star.png" />
                                    <Star src="assets/img/star.png" />
                                    <Star src="assets/img/star.png" />
                                    <Star src="assets/img/half_star.png" />
                                </RowContainer>
                            </SubContainer>
                            <span style={{
                                color: '#D6D6D6',
                                font: '1.4375rem/1.875rem Roboto'
                            }}>
                                FROM 2 CUSTOMERS
                            </span>
                            <RowContainer style={{
                                width: '80%',
                                position: 'relative',
                                margin: 'auto'
                            }}>
                                <RatingContainer />
                            </RowContainer>
                        </Container>
                    </ContainerWrapper>

                    <ContainerWrapper style={{
                        backgroundImage: '#FFFFFF',
                    }}>
                        <Container>
                            <span style={{
                                color: '#000000',
                                font: 'bold 2.5rem/4.75rem Helvetica'
                            }}>
                                SUPPORTERS
                                <BlueHorizonLine />
                            </span>
                            <RowContainer>
                                <img src="assets/img/partners/EzygroupLogo-04.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }} />
                                <img src="assets/img/partners/logoezyplant2.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }} />
                                <img src="assets/img/partners/nsc_logo.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }} />
                            </RowContainer>
                            <RowContainer>
                                <img src="assets/img/partners/startup_logo.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }} />
                                <img src="assets/img/partners/startup-academy-logo.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }} />
                                <img src="assets/img/partners/su_logo.png" style={{
                                    width: '200px',
                                    height: '200px',
                                    margin: '32px',
                                    objectFit: 'contain'
                                }} />
                            </RowContainer>
                        </Container>
                    </ContainerWrapper>

                </ContainerLine>
            </Fragment>
        );
    }
}

export default blinkLandingPage;