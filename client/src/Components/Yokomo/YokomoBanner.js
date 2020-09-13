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
background: #0077be;
border-radius: 20px;
left: 500px;

h1{
   color: white;
    
}
@media (min-width: 640px){
    left: 230px;
 h1{
     font-size:1rem;
 }
     
    }
@media (min-width: 768px){
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