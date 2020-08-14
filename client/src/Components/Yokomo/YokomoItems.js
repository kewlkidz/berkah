import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import yokomoData from '../../Data/Yokomo';

const ImageDiv = styled.div `
display: flex;
margin: 20px;
flex-wrap: wrap;
flex-direction: row;

 div{
  border: 2px solid black;
  margin: 10px 10px;
     
 }
`;

const Image = styled.img `
width: 200px;
height: 200px;
`;

const YokomoItems = ()=>{
    const [yokoData, setYokoData]=useState([]);
    useEffect(()=>{
        setYokoData(yokomoData)
    },[])

    
    return(
        <ImageDiv>
       
            {yokoData.map((item)=>(
                 <Link to={`/items/${item.id}`} ><div key={item.id}>
                <Image src={item.imageUrl}></Image>
                <p>Jis: {item.jis}</p>
                <p>New Jis: {item.newJis}</p>
                <p>Volts: {item.volt}V</p>
                </div>
                </Link>
               
            ))}
    
    </ImageDiv>
    
       
    )
}
export default YokomoItems