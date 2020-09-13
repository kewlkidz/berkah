import React from "react";
import { Route, Link, NavLink, useParams, useRouteMatch } from "react-router-dom";
import ItemDescription from "./ItemDescription";
import styled from "styled-components";
import Header from "../MainPage/Header/Header";

const YokomoItemDiv = styled.div`
	width: 80vw;
	margin: 25px auto;
	-webkit-box-shadow: -5px 3px 1px 11px #0077be;
		-moz-box-shadow: -5px 3px 1px 11px #0077be;
		box-shadow: -5px 3px 21px 1px #0077be;

	.innerDiv {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.imgDiv {
		width: 50%;
	}
	img {
		width: 90%;
	}
	.itemInfo {
		padding-left: 5%;
		line-height: 0.2rem;
		text-align: left;
		width: 50%;
	}
	h2 {
		font-size: 2rem;
	}

	@media (max-width: 640px){
		
		.itemInfo{
			width: 100%;
		}
		
	}

	@media (max-width: 768px){
		
		.itemInfo{
			width: 99%;
		}
		
	}
`;

const YokomoItem = (props) => {
	const params = useParams();
	console.log(params);

	const routeMatch = useRouteMatch();
	console.log(routeMatch);

	const shopItem = props.items.find((item) => item.id === Number(params.banana));

	return (
		<>
			<YokomoItemDiv>
				<div className="innerDiv">
					<div className="itemInfo">
						<h3>JIS: {shopItem.jis}</h3>
						<h3>New JIS: {shopItem.newJis}</h3>
						<h3>DIN: {shopItem.din}</h3>
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
						<h4>
							Acid Filling Tropical Climate 27C: {shopItem.AcidFillingTropicalClimate27C}
						</h4>
						<h4>
							Acid Filling Temperate Climate 27C: {shopItem.AcidFillingTemperateClimate27C}
						</h4>
						<h4>Charging Rate Amps: {shopItem.chargingRateAmps}</h4>
					</div>
					<div className="imgDiv">
						<img src={shopItem.imageUrl} alt={shopItem.jis}></img>
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
			</YokomoItemDiv>
		</>
	);
};
export default YokomoItem;
