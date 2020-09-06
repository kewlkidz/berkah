import React from 'react';
import { Route, Link, NavLink, useParams, useRouteMatch } from 'react-router-dom';
// import ItemDescription from "./ItemDescription";
// import styled from 'styled-components';

// const Image = styled.div `
//     width: 50%;
//     height: 50%;
// `;

const YokomoItem = (props) => {

    const params = useParams();
    console.log(params)

    const routeMatch = useRouteMatch();
    console.log(routeMatch)

    const shopItem = props.items.find(item => item.id === Number(params.banana))

    return(
        <div>
            <div>
                <div>
                    <img src={shopItem.imageUrl} alt={shopItem.jis} ></img>
                </div>
                <div>
                   <h2>JIS: {shopItem.jis}</h2>
                   <h4>New JIS: {shopItem.newJis}</h4> 
                   <h4>Volt: {shopItem.volt}</h4>
                   <h4>Number of PlateCel: {shopItem.numberOfPlateCel}</h4>
                   <h4>AH Capacity 20 Hours Rate: {shopItem.ahCapacity20HrsRate}</h4>
                   <h4>Reserve Capacity Minutes: {shopItem.reserveCapacityMinutes}</h4>
                   <h4>Approx. Acid Vol Litres: {shopItem.approxAcidVolLitres}</h4>
                   <h4>Length Mm: {shopItem.lengthMm}</h4>
                   <h4>Width Mm: {shopItem.widthMm}</h4>
                   <h4>Height Mm: {shopItem.heightMm}</h4>
                   <h4>Th: {shopItem.th}</h4>
                   <h4>Assembly Layout: {shopItem.assemblyLayout}</h4>
                   <h4>Acid Filling Tropical Climate 27C: {shopItem.AcidFillingTropicalClimate27C}</h4>
                   <h4>Acid Filling Temperate Climate 27C: {shopItem.AcidFillingTemperateClimate27C}</h4>
                   <h4>Charging Rate Amps: {shopItem.chargingRateAmps}</h4>
                 
                </div>
            </div>
            {/* <nav>
                <NavLink exact to={routeMatch.url}>
                    Description
                </NavLink>
            </nav>
            <Route exact path={routeMatch.path}>
                <ItemDescription item={shopItem}/>
            </Route> */}
    </div>
    )
}
export default YokomoItem;

