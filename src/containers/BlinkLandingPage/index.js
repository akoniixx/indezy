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
    Star
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
                    <SlideShow/>
                    <HoverSideBar/>
                    <ContainerWrapper style={{
                        backgroundImage: 'linear-gradient(to bottom, #000000 0%, #000066 100%)',
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
                                    height: '100px',
                                    marginRight: '32px'
                                }}/>
                                <OrangeVerticalLine/>
                                <span style={{
                                color:'#FFFFFF'
                                }}>
                                    วิกิตัวแรกชื่อว่า WikiWikiWeb[1] สร้างโดย วอร์ด คันนิงแฮม เมื่อพ.ศ. 2537 สำหรับโครงการ Portland Pattern Repository ของเขา โดยได้เขียนโปรแกรมขึ้นด้วยภาษาเพิร์ลและติดตั้งลงที่เว็บ c2.com โดยชื่อของ วิกิ
                                </span>
                            </SubContainer>
                            <SubContainer>
                                <img src="assets/img/chip (1).png" style={{
                                    width: '100px',
                                    height: '100px',
                                    marginRight: '32px'
                                }}/>
                                <OrangeVerticalLine/>
                                <span style={{
                                color:'#FFFFFF'
                                }}>
                                    วิกิตัวแรกชื่อว่า WikiWikiWeb[1] สร้างโดย วอร์ด คันนิงแฮม เมื่อพ.ศ. 2537 สำหรับโครงการ Portland Pattern Repository ของเขา โดยได้เขียนโปรแกรมขึ้นด้วยภาษาเพิร์ลและติดตั้งลงที่เว็บ c2.com โดยชื่อของ วิกิ
                                </span>
                            </SubContainer>
                            <SubContainer>
                                <img src="assets/img/chip (1).png" style={{
                                    width: '100px',
                                    height: '100px',
                                    marginRight: '32px'
                                }}/>
                                <OrangeVerticalLine/>
                                <span style={{
                                color:'#FFFFFF'
                                }}>
                                    วิกิตัวแรกชื่อว่า WikiWikiWeb[1] สร้างโดย วอร์ด คันนิงแฮม เมื่อพ.ศ. 2537 สำหรับโครงการ Portland Pattern Repository ของเขา โดยได้เขียนโปรแกรมขึ้นด้วยภาษาเพิร์ลและติดตั้งลงที่เว็บ c2.com โดยชื่อของ วิกิ
                                </span>
                            </SubContainer>
                        </Container>
                    </ContainerWrapper>

                    <ContainerWrapper style={{
                        backgroundImage: 'linear-gradient(to bottom, #000066 0%, #000000 100%)',
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
                                    <img src="assets/img/chip (1).png" style={{
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '32px'
                                    }}/>
                                    <OrangeHorizonLine/>
                                    <span style={{
                                        color:'#FFFFFF'
                                    }}>
                                        วิกิตัวแรกชื่อว่า WikiWikiWeb[1] สร้างโดย วอร์ด คันนิงแฮม เมื่อพ.ศ. 2537 สำหรับโครงการ Portland Pattern Repository ของเขา โดยได้เขียนโปรแกรมขึ้นด้วยภาษาเพิร์ลและติดตั้งลงที่เว็บ c2.com โดยชื่อของ วิกิ
                                    </span>
                                </SubColContainer>
                                <SubColContainer>
                                    <img src="assets/img/chip (1).png" style={{
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '32px'
                                    }}/>
                                    <OrangeHorizonLine/>
                                    <span style={{
                                        color:'#FFFFFF'
                                    }}>
                                        วิกิตัวแรกชื่อว่า WikiWikiWeb[1] สร้างโดย วอร์ด คันนิงแฮม เมื่อพ.ศ. 2537 สำหรับโครงการ Portland Pattern Repository ของเขา โดยได้เขียนโปรแกรมขึ้นด้วยภาษาเพิร์ลและติดตั้งลงที่เว็บ c2.com โดยชื่อของ วิกิ
                                    </span>
                                </SubColContainer>
                                <SubColContainer>
                                    <img src="assets/img/chip (1).png" style={{
                                        width: '100px',
                                        height: '100px',
                                        marginBottom: '32px'
                                    }}/>
                                    <OrangeHorizonLine/>
                                    <span style={{
                                        color:'#FFFFFF'
                                    }}>
                                        วิกิตัวแรกชื่อว่า WikiWikiWeb[1] สร้างโดย วอร์ด คันนิงแฮม เมื่อพ.ศ. 2537 สำหรับโครงการ Portland Pattern Repository ของเขา โดยได้เขียนโปรแกรมขึ้นด้วยภาษาเพิร์ลและติดตั้งลงที่เว็บ c2.com โดยชื่อของ วิกิ
                                    </span>
                                </SubColContainer>
                            </RowContainer>
                        </Container>
                    </ContainerWrapper>

                    <ContainerWrapper style={{
                        backgroundImage: 'radial-gradient(#FFFFFF, #E3E3E3, #E3E3E3)',
                    }}>
                        <Container>
                            <span style={{
                                color:'#000000',
                                fontSize:'2.5em',
                                fontWeight:'Bold'
                            }}>
                                TESTIMONIAL
                                <BlueHorizonLine/>
                            </span>
                            <SubContainer>
                                <span style={{
                                    fontSize:'4.5em',
                                    color:'#4E5357',
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
                                color: '#B1B3B5',
                                fontSize: '1.3em'
                            }}>
                                FROM 220 CUSTOMERS
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