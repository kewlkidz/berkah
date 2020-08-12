import React from 'react';
import styled from 'styled-components';

const NavCont = styled.nav `
padding: 0 30px;
 a{
     color: white;
     text-decoration: none;
     padding: 0 15px;
 }
`;
//nav links just temp place holder until get ready for routing
const Nav = ()=>{
    return(
        <div>
            <NavCont>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Products</a>
                <a href="">Contact</a>
            </NavCont>
        </div>
    )

}

export default Nav