import React, { Component, Fragment } from 'react';
import {
    ContentLine,
    ContentBox,
    MoneyBox,
    IntroduceText,
    SubIntroduceText,
    IntroduceImg,
    CenterText,
    CardItem,
    CardImg,
    CardText,
    SubCardText,
    FirstContentBox,
    PartnerImg,
    AllInContentBox
}
from 'Components/landingPage';
import { Input, Button, Carousel, Icon } from 'antd';
import SlideView from 'Components/SlideView';

class landingPage extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        const { reference } = this.props;
        return (
            <ContentLine className="MainLP">
                <AllInContentBox ref={(e) => reference("what", e)}>
                    <div style={{
                       width:'30%',
                       backgroundColor: '#2D2D71',
                       height:'100px',
                       display:'flex',
                       alignItems:'center',
                       marginBottom:'8px',
                       padding:'8px',
                       marginRight: '30%'
                    }}>
                        <span>1</span>
                    </div>
                    <div  style={{
                       width:'30%',
                       backgroundColor: '#80F787',
                       height:'100px',
                       display:'flex',
                       alignItems:'center',
                       margin:'8px',
                       padding:'8px'
                    }}>
                        <span>2</span>
                    </div>
                    <div  style={{
                       width:'30%',
                       backgroundColor: '#F57F39',
                       height:'100px',
                       display:'flex',
                       alignItems:'center',
                       marginTop:'8px',
                       padding:'8px',
                       marginLeft: '30%'
                    }}>
                        <span>3</span>
                    </div>
                </AllInContentBox>

                <MoneyBox>
                    <span>hi</span>
                </MoneyBox>
                <CenterText style={{ marginBottom: '20px' }}>Why indezy?</CenterText>
                <ContentBox className="card" ref={(e) => reference("card", e)} style={{ padding: '50px', marginBottom: '50px' }}>
                    <CardItem style={{ boxShadow: '0 2px 7px 0', backgroundColor: '#FFFFFF' }}>
                        <i className="simple-icon-clock" style={{ fontSize: '5em', padding: '0 0 10px', color: '#F47529' }}></i>
                        <CardText style={{ paddingTop: '20px' }}>ลดเวลาในการดูแล</CardText>
                        {/* <SubCardText>with ben-onichan.</SubCardText> */}
                    </CardItem>

                    <CardItem style={{ boxShadow: '0 2px 7px 0', backgroundColor: '#FFFFFF' }}>
                        <i className="simple-icon-wallet" style={{ fontSize: '5em', padding: '0 0 10px', color: '#F47529' }}></i>
                        <CardText style={{ paddingTop: '20px' }}>สบายกระเป๋า</CardText>
                        {/* <SubCardText>With vape.</SubCardText> */}
                    </CardItem>

                    <CardItem style={{ boxShadow: '0 2px 7px 0', backgroundColor: '#FFFFFF' }}>
                        <i className="simple-icon-graph" style={{ fontSize: '5em', padding: '0 0 10px', color: '#F47529' }}></i>
                        <CardText style={{ paddingTop: '20px' }}>เพิ่มประสิทธิภาพ</CardText>
                        {/* <SubCardText>Good team.</SubCardText> */}
                    </CardItem>
                </ContentBox>

                <Fade bottom>
                    <CenterText>Achievement</CenterText>
                    <ContentBox ref={(e) => reference("archiv", e)} style={{ margin: '20px', marginBottom: '50px' }}>
                        <Icon style={{ fontSize: '38px', color: '#F47529', padding: '20px' }} lineheight='3' type="left-circle" onClick={this.prev} />
                        {/* <div className="siema" style={{width:'700px',height:'100%', display: 'block',alignItem: 'center',boxShadow: '0 5px 10px 0'}}>
                        <img src="/assets/img/1.png" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                        <img src="/assets/img/2.png" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                        <img src="/assets/img/3.png" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                        <img src="/assets/img/4.png" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                    </div> */}
                        <Icon style={{ fontSize: '38px', color: '#F47529', padding: '20px' }} lineheight='3' type="right-circle" onClick={this.next} />
                    </ContentBox>
                </Fade>

                <Fade bottom>
                    <CenterText ref={(e) => reference("partner", e)} style={{}}>Our partner</CenterText>
                    <ContentBox style={{ height: 170, padding: '0px' }}>
                        <PartnerImg src="/assets/img/partners/EzygroupLogo-04_rz.png" />
                        <PartnerImg src="/assets/img/partners/logoezyplant2.png" />
                        <PartnerImg style={{ width: 100, height: 100 }}
                            src="/assets/img/partners/nsc_logo.png" />
                        <img style={{ height: 80, padding: '0px 15px' }}
                            src="/assets/img/partners/su_logo.png" />
                        <img style={{ height: 100 }} src="/assets/img/partners/startup_logo.png" />
                        <img style={{ height: 120 }} src="/assets/img/partners/startup-academy-logo.png" />
                    </ContentBox>
                </Fade>

            </ContentLine>
        );
    }

}

export default landingPage;