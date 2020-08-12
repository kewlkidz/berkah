import React from 'react';
import styled from 'styled-components';
import yokomoData from '../../Data/Yokomo';

const ImageDiv = styled.div `
display: flex;
margin: 20px;
flex-wrap: wrap;
flex-direction: row;

 div{
  border: 2px solid black;
     
 }
`;

const Image = styled.img `
width: 200px;
height: 200px;
`;
const YokomoItems =()=>{
    const data=yokomoData;
    console.log(data[0])
    return(
        <ImageDiv>
       
            {data.map((item)=>(
                    <div key={item.id}>
                <Image src={item.imageUrl}></Image>
                <p>Jis: {item.jis}</p>
                <p>New Jis: {item.newJis}</p>
                <p>Volts: {item.volt}V</p>
                </div>
               
            ))}
    
    </ImageDiv>
    
       
    )
}
export default YokomoItems