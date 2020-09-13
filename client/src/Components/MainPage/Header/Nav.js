import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavCont = styled.nav `
padding: 0 30px;
display: flex;
 div{
     color: white;
     text-decoration: none;
     padding: 0 15px;
     &:hover{
        color: yellow;
    }
    
 }
`;
//nav links just temp place holder until get ready for routing
const Nav = ()=>{
    return(
        <div>
            <NavCont>
            <Link style={{textDecoration:'none'}} to={`/`}><div>Home</div></Link>
            <Link style={{textDecoration:'none'}} to={`/`}><div>About</div></Link>
            <Link style={{textDecoration:'none'}} to={`/yokomo`}><div>Yokomo Batteries</div></Link>
            <Link style={{textDecoration:'none'}} to={`/contact`}><div>Contact</div></Link>
            </NavCont>
        </div>
    )

}

export default Nav