import React, { Component, Fragment } from 'react';
import {
    ContentLine,
    ContentBox,
    TextBox,
    IntroduceText,
    SubIntroduceText,
    IntroduceImg,
    CenterText,
    CardItem,
    CardImg,
    CardText,
    SubCardText,
    BGImg,
    PartnerImg,
    EmailBox
}
    from 'Components/landingPage';
import { Input, Button,Carousel,Icon } from 'antd';
import Siema from 'siema';
import Fade from 'react-reveal/Fade';
class landingPage extends Component {

    prev = () => {
        this.siema.prev()
      };
      
      next = () => {
        this.siema.next()
      };

    render() {
        const Slide = (props) => <img {...props} alt="slide" />

        const { reference } = this.props;
        return (
            <ContentLine className="MainLP">

                <Fade bottom>
                <ContentBox ref={(e)=>reference("introduce", e)} style={{padding:'100px'}}>
                    <TextBox>
                        <IntroduceText>IoT to industry.</IntroduceText>
                        <SubIntroduceText>Business intelligence system realtime.</SubIntroduceText>
                        {/* <div style={{boxShadow: '0 5px 10px 0 #F47529',borderRadius:'5px',
                                    padding: 10,margin: '20px 0 0 0',backgroundColor: '#FFFFFF'}}>
                            <span style={{padding: '0px 0px 5px',fontWeight:'Bold',fontSize:'2em'}}>Stay tuned!</span>
                            <EmailBox>
                            <span style={{display: 'flex',alignItems: 'center',
                                fontSize:'1.2em'}}>Email: </span>
                                <Input style={{width:300,margin: '0px 7px'}} placeholder='example@you.com'/>
                                <Button type='primary' style={{margin: '0px 7px'}}>Subscript</Button>
                            </EmailBox>
                        </div> */}
                    </TextBox>
                    <IntroduceImg src="/assets/img/page2.png" />
                </ContentBox>
                </Fade>

                <Fade bottom>
                <ContentBox ref={(e)=>reference("what", e)} style={{flexDirection:'column',justifyContent:'center',backgroundColor: 'rgba(0, 0, 0, 0.2)',width:'100vw',left:'-50%',right:'-50%',margin:'20px 0px 50px',padding:'100px'}}>
                    
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <img src='assets/img/quote.png' style={{width:'100px',height:'100px'}}/>
                        <span style={{display: 'flex',alignItems: 'center',justifyContent:'center',
                                fontSize:'1.8em'}}>
                            เพื่อจัดทำกระบวนการอุตสาหกรรมให้มีความแม่นยำและชัดเจนมากขึ้น
                        </span>
                        <span style={{display: 'flex',alignItems: 'center',justifyContent:'center',
                                fontSize:'1.8em'}}>
                             ซึ่งช่วยให้ลดค่าใช้จ่ายที่เสียไป จากความไม่ชัดเจนและไม่แม่นยำจากระบบเดิม
                        </span>
                        <img src='assets/img/quote.png' style={{width:'100px',height:'100px',transform: 'scaleX(-1)',
                            alignSelf: 'flex-end'}}/>
                    </div>
                </ContentBox>

                <CenterText style={{marginBottom: '20px'}}>Why indezy?</CenterText>
                <ContentBox className="card" ref={(e) => reference("card", e)} style={{padding:'50px',marginBottom:'50px'}}>
                    <CardItem style={{boxShadow: '0 2px 7px 0',backgroundColor: '#FFFFFF'}}>
                        <i className="simple-icon-clock" style={{fontSize:'5em',padding: '0 0 10px',color:'#F47529'}}></i>
                        <CardText style={{paddingTop:'20px'}}>ลดเวลาในการดูแล</CardText>
                        {/* <SubCardText>with ben-onichan.</SubCardText> */}
                    </CardItem>

                    <CardItem style={{boxShadow: '0 2px 7px 0',backgroundColor: '#FFFFFF'}}>
                    <i className="simple-icon-wallet" style={{fontSize:'5em',padding: '0 0 10px',color:'#F47529'}}></i>
                        <CardText style={{paddingTop:'20px'}}>สบายกระเป๋า</CardText>
                        {/* <SubCardText>With vape.</SubCardText> */}
                    </CardItem>

                    <CardItem style={{boxShadow: '0 2px 7px 0',backgroundColor: '#FFFFFF'}}>
                    <i className="simple-icon-graph" style={{fontSize:'5em',padding: '0 0 10px',color:'#F47529'}}></i>
                        <CardText style={{paddingTop:'20px'}}>เพิ่มประสิทธิภาพ</CardText>
                        {/* <SubCardText>Good team.</SubCardText> */}
                    </CardItem>
                </ContentBox>
                </Fade>

                <Fade bottom>
                <CenterText>Achievement</CenterText>
                <ContentBox ref={(e)=>reference("archiv", e)} style={{margin:'20px',marginBottom:'50px'}}>
                    <Icon style={{ fontSize: '38px', color: '#F47529',padding: '20px'}} lineheight='3' type="left-circle" onClick={this.prev}/>
                    <div className="siema" style={{width:'700px',height:'100%', display: 'block',alignItem: 'center',boxShadow: '0 5px 10px 0'}}>
                        <img src="/assets/img/1.png" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                        <img src="/assets/img/2.png" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                        <img src="/assets/img/3.png" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                        <img src="/assets/img/4.png" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                    </div>
                    <Icon style={{ fontSize: '38px', color: '#F47529',padding: '20px'}} lineheight='3' type="right-circle" onClick={this.next}/>
                </ContentBox>
                </Fade>

                <Fade bottom>
                <CenterText ref={(e)=>reference("partner", e)} style={{}}>Our partner</CenterText>
                <ContentBox style={{height:170,padding:'0px'}}>
                    <PartnerImg src="/assets/img/partners/EzygroupLogo-04_rz.png" />
                    <PartnerImg src="/assets/img/partners/logoezyplant2.png" />
                    <PartnerImg style={{width:100,height:100}}
                        src="/assets/img/partners/nsc_logo.png" />
                    <img style={{height:80,padding: '0px 15px'}} 
                        src="/assets/img/partners/su_logo.png" />
                    <img style={{height:100}} src="/assets/img/partners/startup_logo.png" />
                    <img style={{height:120}} src="/assets/img/partners/startup-academy-logo.png" />
                </ContentBox>
                </Fade>
                
            </ContentLine>
        );
    }

    componentDidMount() {
        this.siema = new Siema({
            selector: '.siema',
            duration: 250,
            loop: true,
            draggable: true,
            perPage: 1,
            multipleDrag: false,
            easing: 'ease-out'
        });
    }

}

export default landingPage;