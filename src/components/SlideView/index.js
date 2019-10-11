import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const Wrapper = styled.div`
    width: 100px;
`;

const SlideItem = styled.div`
    width: 100px;
`;
export default class SlideView extends React.Component {
    render(){
        return(
            <Wrapper>
                <Slider
                    speed={100}
                    slidesToScroll={1}
                    slidesToShow={1}
                    infinite={true}
                >
                    <SlideItem>test 1</SlideItem>
                    <SlideItem>test 2</SlideItem>
                    <SlideItem>test 3</SlideItem>
                </Slider>
            </Wrapper>
        );
    }
}