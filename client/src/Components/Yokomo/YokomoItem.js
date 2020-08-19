import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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




const YokomoItem = (props) => {

    const { yokoItem } = props;


    return(

    <ImageDiv>
              
                <Image src={yokoItem.imageUrl}></Image> 
                <p>Jis: {yokoItem.jis}</p>
                <p>New Jis: {yokoItem.newJis}</p>
                <p>Volts: {yokoItem.volt}V</p>
                       
    </ImageDiv>
    )

}
export default YokomoItem