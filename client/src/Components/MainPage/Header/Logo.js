import React from 'react'
import styled from 'styled-components'

const LogoDiv = styled.div `
 display: flex;

    h1{
        color:  #0077be;
        font-size: 1.6rem;
        background:yellow;
        width: 35px;
        height: 35px;
        display: flex;
        flex-wrap:wrap;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        border-radius: 5px;
    }
    h2{
        padding: 0 20px;
        color: white;
    }
    @media (max-width: 640px){
        h1{
        font-size: 1rem;
        width: 30px;
        height:30px;
        }
        h2{
            display:none;
            }
    
    }
`;

const Logo = ()=>{
    return(
        
        <LogoDiv>
            <h1>BB</h1>
            <h2>Burkah Buana</h2>
        </LogoDiv>
        
    )
}

export default Logo