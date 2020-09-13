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
    @media only screen and (max-width: 600px){
        
        h1{
        display:none;
        }
        h2{
            display:none;
            }
    
    }

    @media only screen and (min-width: 768px){
        h1{
            font-size: 1.2rem;
        }
        h2{
            display:none;
        }
        
         
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