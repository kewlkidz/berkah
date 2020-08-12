import React from 'react';
import styled from 'styled-components';

const FormCont =  styled.form `
    display:flex;
    position: absolute;
    right: 0;
    padding: 0 20px;
    `;

const SearchBar = ()=>{
    return(
        <FormCont >
            <input type="text" placeholder="Search"></input>
        </FormCont>
    )
}

export default SearchBar