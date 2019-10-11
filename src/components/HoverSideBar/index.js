import React from 'react';
import styled from 'styled-components';

export default class HoverSideBar extends React.Component {
    render(){
        return (
            <HoverContainer>
                <Item>
                    <a href='https://www.facebook.com/indezy'>
                        <img style={{
                            width: '30px',
                            height: '30px',
                            marginRight: '12px'
                        }} src='assets/img/facebook-logo.png'/>
                        <span style={{
                            fontSize: '1.2em',
                            fontWeight: 'bold'
                        }}>
                            @Indezy
                        </span>
                    </a>
                </Item>
                <Item style={{
                    marginTop: '10px'
                }}>
                        <a href='https://www.youtube.com/channel/indezy'>
                            <img style={{
                                width: '30px',
                                height: '30px',
                                marginRight: '12px'
                            }} src='assets/img/youtube.png'/>
                            <span style={{
                                fontSize: '1.2em',
                                fontWeight: 'bold'
                            }}>
                                Indezy_Channel
                            </span>
                        </a>
                </Item>
            </HoverContainer>
        );
    }
}

const HoverContainer = styled.div`
position: fixed;
right: -150px;
top: 270px;
transition: 0.3s;
cursor: pointer;
border-collapse: separate;
width: 200px;
background-Color: #FF9300;
border-radius: 5px 0 0 5px;
padding: 12px;
display: flex;
flex-direction: column;
:hover {
        right: 0;
	}
`;

const Item = styled.div`
display: flex;
align-items: center;
`;