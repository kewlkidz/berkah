import React from 'react';
import styled from 'styled-components';

const YokomoBannerDiv = styled.div `
width: 30%;
height: 50px;
margin-top: 20px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
background: rgba(75, 0, 130, 0.5);

h1{
   color: white;
    
}
`;

const YokomoBanner = ()=>{
    return(
        <YokomoBannerDiv>
        <h1>Yokomo Products:</h1>
        </YokomoBannerDiv>
    )
}
export default YokomoBanner