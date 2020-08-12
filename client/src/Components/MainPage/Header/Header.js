import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import Nav from './Nav';
import SearchBar from './SearchBar';

const HeaderDiv = styled.div `
padding: 20px;
display: flex;
align-items: center;
background-color:  #4B0082;
`;

const Header = ()=>{
    return(
        <HeaderDiv>
        <Logo />
        <Nav />
        
        <SearchBar />

        </HeaderDiv>

    )
}

export default Header