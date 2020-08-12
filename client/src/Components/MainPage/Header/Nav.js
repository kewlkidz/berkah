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
 }
`;
//nav links just temp place holder until get ready for routing
const Nav = ()=>{
    return(
        <div>
            <NavCont>
            <Link to={`/`}><div>Home</div></Link>
            <Link to={`/`}><div>About</div></Link>
            <Link to={`/yokomo`}><div>Yokomo Products</div></Link>
            <Link to={`/`}><div>Contact</div></Link>
            </NavCont>
        </div>
    )

}

export default Nav