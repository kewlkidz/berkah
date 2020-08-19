import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import yokomoData from '../../Data/Yokomo';


const ItemDetails = (props) => {

    const [item, setItem] = useState();


    const  { 
        id, 
        jis, 
        newJis, 
        volt, 
        numberOfPlateCel, 
        ahCapacity20HrsRate, 
        reserveCapacityMinutes,
        approxAcidVolLitres,
        lengthMm,
        widthMm,
        heightMm,
        th,
        assemblyLayout,
        AcidFillingTropicalClimate27C,
        AcidFillingTemperateClimate27C,
        chargingRateAmps
    } = useParams();

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
        <p>{volt}</p>
        <p>{numberOfPlateCel}</p>
        <p>{ahCapacity20HrsRate}</p>
        <p>{reserveCapacityMinutes}</p>
        <p>{approxAcidVolLitres}</p>
        <p>{lengthMm}</p>
        <p>{widthMm}</p>
        <p>{heightMm}</p>
        <p>{th}</p>
        <p>{assemblyLayout}</p>
        <p>{AcidFillingTropicalClimate27C}</p>
        <p>{AcidFillingTemperateClimate27C}</p>
        <p>{chargingRateAmps}</p>
        {/* <img src={item.image}></img> */}
        </div>

    )

}

export default ItemDetails;

