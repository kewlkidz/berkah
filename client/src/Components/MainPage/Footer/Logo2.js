import React from 'react';
import styled from 'styled-components';

const FooterLogo = styled.div `
 display: flex;
 justify-content: center;
 align-items: center;

h3,h4{
    padding: 0 20px;
    color:white;
}
`;

const Logo2 =()=>{
    return(
        <FooterLogo>
        <h3>Burkah Buana</h3>
        <h4>Address Here</h4>
        <h4>Tel: 999-999-9999</h4>
        <h4>Email: Berkah_buana@yahoo.co.id</h4>
        </FooterLogo>
    )
}
export default Logo2