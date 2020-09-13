import React from 'react'
import styled from 'styled-components';
import Logo2 from './Logo2';

const FooterCont = styled.div `
display: flex;
align-items: center;
justify-content: center;
background-color:  #0077be;
position: fixed;
bottom: 0;
width:100%;

@media only screen and (max-width: 600px) {
    font-size: .4rem;
    }
}


@media only screen and (min-width: 600px) {...}


@media only screen and (min-width: 768px) {...}


@media only screen and (min-width: 992px) {...}


@media only screen and (min-width: 1200px) {...}

`;

const Footer = ()=>{
    return(
        <FooterCont>
        <Logo2 />
        </FooterCont>
    )
}
export default Footer