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
        <h3>Berkah Buana</h3>
        <h4>Jl. Lautze No. 115/48, Pasar Baru, Jakarta Pusat 10740, Indonesia</h4>
        <h4>Tel: 021-626-5678</h4>
        <h4>Email: berkah_buana@yahoo.co.id</h4>
        </FooterLogo>
    )
}
export default Logo2