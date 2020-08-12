import React from 'react';
import styled from 'styled-components'

const BannerDiv = styled.div `
width: 70%;
height: 150px;
margin-top: 20px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
background: rgba(75, 0, 130, 0.5);

h2,p{
   color: white;
    
}
`;

const Banner =()=>{
    return (
        <BannerDiv>
        <h2>Burkah Buana</h2>
        <p>SUPPLIER OF SAFETY EQUIPMENT, TOOLS, TRACTORS AND DIESEL ENGINE PARTS, CONTRACTOR, ELECTRICAL PANEL</p>
        </BannerDiv>
    )
}

export default Banner