import React from 'react';
import styled from 'styled-components';
import yokomoData from '../../Data/Yokomo';

const Image = styled.img `
width: 200px;
height: 200px;
`

const YokomoItems =()=>{
    const data=yokomoData;
    console.log(data[0])
    return(
    <Image src={data[0].imageUrl}></Image>
    
       
    )
}
export default YokomoItems