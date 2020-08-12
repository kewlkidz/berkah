import React from 'react'
import styled from 'styled-components';
import Logo2 from './Logo2';

const FooterCont = styled.div `
display: flex;
align-items: center;
justify-content: center;
background-color:  #4B0082;
position: absolute;
bottom: 0;
width:100%

`;

const Footer = ()=>{
    return(
        <FooterCont>
        <Logo2 />
        </FooterCont>
    )
}
export default Footer