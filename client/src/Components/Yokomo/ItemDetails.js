import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import yokomoData from '../../Data/Yokomo';


const ItemDetails = (props) => {

    const [item, setItem] = useState();


    const  { id, jis, newJis } = useParams();

    console.log('This is my params', newJis)   

    // useEffect(() => {

    //     setItem(
    //         id: id,
    //         jis: jis,
    //         newJis: newJis,
    //         // image: imageUrl
    //     ) 

    
    //     },[item]);


    return (
        <div>
        <h1>product card goes here</h1>
        <p>{id}</p>
        <p>{jis}</p>
        <p>{newJis}</p>
        {/* <img src={item.image}></img> */}
        </div>

    )

}

export default ItemDetails;