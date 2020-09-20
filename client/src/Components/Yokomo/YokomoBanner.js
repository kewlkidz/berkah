import React from 'react';
import styled from 'styled-components';

const YokomoBannerDiv = styled.div `
display:inline-block;
margin: 20px 0;
width: 200px;
align-items: center;
background: #0077be;
border-radius: 20px;

h1{
    font-size: 1.2rem;
   color: white;
    
}
@media only screen and (max-width: 600px){
    
 h1{
    
 }
     
    }
@media (max-width: 768px){
    left: 280px;
    margin: 40px 0;
    h1{
        font-size:1.2rem;
    }
        
    }
`;

const YokomoBanner = ()=>{
    return(
        <YokomoBannerDiv>
        <h1>Yokomo Batteries:</h1>
        </YokomoBannerDiv>
    )
}
export default YokomoBanner