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
                <ContentBox ref={(e)=>reference("introduce", e)}>
                    <TextBox>
                        <IntroduceText>IoT to industry.</IntroduceText>
                        <SubIntroduceText>Business intelligence system realtime.</SubIntroduceText>
                        <div style={{boxShadow: '0 5px 10px 0 #F47529',borderRadius:'5px',
                                    padding: 10,margin: '20px 0 0 0',backgroundColor: '#FFFFFF'}}>
                            <span style={{padding: '0px 0px 5px',fontWeight:'Bold',fontSize:'2em'}}>Stay tuned!</span>
                            <EmailBox>
                            <span style={{display: 'flex',alignItems: 'center',
                                fontSize:'1.2em'}}>Email: </span>
                                <Input style={{width:300,margin: '0px 7px'}} placeholder='example@you.com'/>
                                <Button type='primary' style={{margin: '0px 7px'}}>Subscript</Button>
                            </EmailBox>
                        </div>
                    </TextBox>
                    <IntroduceImg src="/assets/img/page2.png" />
                </ContentBox>
                </Fade>

                <Fade bottom>
                <CenterText>Why indezy?</CenterText>

                <ContentBox className="card" ref={(e) => reference("card", e)}>
                    <CardItem style={{boxShadow: '0 2px 7px 0',backgroundColor: '#FFFFFF'}}>
                        <i className="simple-icon-clock" style={{fontSize:'5em',padding: '0 0 10px',color:'#F47529'}}></i>
                        <CardText>Good feelling</CardText>
                        <SubCardText>with ben-onichan.</SubCardText>
                    </CardItem>

                    <CardItem style={{boxShadow: '0 2px 7px 0',backgroundColor: '#FFFFFF'}}>
                    <i className="simple-icon-wallet" style={{fontSize:'5em',padding: '0 0 10px',color:'#F47529'}}></i>
                        <CardText>Comfort</CardText>
                        <SubCardText>With vape.</SubCardText>
                    </CardItem>

                    <CardItem style={{boxShadow: '0 2px 7px 0',backgroundColor: '#FFFFFF'}}>
                    <i className="simple-icon-graph" style={{fontSize:'5em',padding: '0 0 10px',color:'#F47529'}}></i>
                        <CardText>Teamwork</CardText>
                        <SubCardText>Good team.</SubCardText>
                    </CardItem>
                </ContentBox>
                </Fade>

                <Fade bottom>
                <CenterText ref={(e)=>reference("partner", e)}>Achievement</CenterText>
                <ContentBox>
                    
                    <Icon style={{ fontSize: '38px', color: '#F47529',padding: '10px'}} lineHeight='3' type="left-circle" onClick={this.prev}/>
                    <div className="siema" style={{width:'700px',height:'400px', display: 'block',alignItem: 'center',boxShadow: '0 5px 10px 0'}}>
                        <img src="/assets/img/product/product4.jpg" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                        <img src="/assets/img/product/product4.jpg" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                        <img src="/assets/img/product/product4.jpg" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                        <img src="/assets/img/product/product4.jpg" style={{objectFit: 'contain',width: '100%',height:'auto'}}/>
                    </div>
                    <Icon style={{ fontSize: '38px', color: '#F47529',padding: '10px'}} lineHeight='3' type="right-circle" onClick={this.next}/>
                </ContentBox>
                </Fade>

                <Fade bottom>
                <CenterText ref={(e)=>reference("partner", e)}>Our partner</CenterText>

                <ContentBox style={{height:200}}>
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