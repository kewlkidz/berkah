import React from 'react';
import styled from 'styled-components'
import image from '../../../Images/n50z.jpg'

const CarouselDiv = styled.div `
display: flex;

img{
    margin: 0 70px;
    margin-top: 100px;
    width: 200px;
    height: 200px;
    -webkit-box-shadow: -5px 3px 21px 11px rgba(110,6,110,1);
    -moz-box-shadow: -5px 3px 21px 11px rgba(110,6,110,1);
    box-shadow: -5px 3px 21px 11px rgba(110,6,110,1);
}
`;
/* carousel will replace the 3 images below */
const BodyCarousel = ()=>{
    return(
        <CarouselDiv>
            
        <img src={image} alt="placeholder"></img>
        <img src={image} alt="placeholder"></img>
        <img src={image}alt="placeholder"></img>
        </CarouselDiv>
    )
}
export default BodyCarousel