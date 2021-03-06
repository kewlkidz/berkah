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
background: #0077be;;

h2,p{
   color: white;
    
}

@media only screen and (max-width: 600px) {
    width:100%;
}


@media only screen and (min-width: 600px) {...}


@media only screen and (min-width: 768px) {...}


@media only screen and (min-width: 992px) {...}


@media only screen and (min-width: 1200px) {...}
`;

const Banner =()=>{
    return (
        <BannerDiv>
        <h2>Berkah Buana</h2>
        <p>SUPPLIER OF SAFETY EQUIPMENT, TOOLS, TRACTORS AND DIESEL ENGINE PARTS, CONTRACTOR, ELECTRICAL PANEL</p>
        </BannerDiv>
    )
}

export default Banner