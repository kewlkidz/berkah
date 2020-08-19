import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import yokomoData from '../../Data/Yokomo';


const ItemDetails = (props) => {

    const [item, setItem] = useState();


    const  params = useParams();
    console.log('This is my params', params)   

    useEffect(() => {

        const id = params.id;   
        setItem(id) 
    //     // fetch(`/Users/angelynaliem/berkah/client/src/Data/Yokomo/${id}`)
    //     // .then(response => {
    //     //   setItemDetails(response.data);
    //     //   console.log(response.data)
   
    //     // })
    //     // .catch(error => {
    //     //   console.error(error);
    //     // });
    
        },[params.id]);


    return (
        <div>
        <h1>product card goes here</h1>
        <p>{item}</p>
        </div>

    )

}

export default ItemDetails;