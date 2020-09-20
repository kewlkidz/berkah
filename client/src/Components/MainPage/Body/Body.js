import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import BodyCarousel from './BodyCarousel';

const BannerWrap = styled.div `
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;


}
`;

const Body =()=>{
    return(
        <BannerWrap>
        <Banner />
        <BodyCarousel />
        </BannerWrap>
    )
}

export default Body