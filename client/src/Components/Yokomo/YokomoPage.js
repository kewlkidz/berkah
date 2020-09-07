import React, { useState } from "react";

import YokomoBanner from './YokomoBanner';
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemsDiv = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	
	
	.itemCard {
		width: 250px;
		height: 250px;
		/* border: 2px solid green; */
		padding: 2%;
	}

	img {
		width: 50%;
	}
`;

const YokomoPage = (props) => {
	const { searchValue } = props;
	const [test, setTest] = useState("this is test from YokomoPage");
	console.log("Yokomopage props", props);

	return (
		<div>
			<YokomoBanner />
			{/* <Header searchValue={searchValue} setSearchValue={setSearchValue} test={test} /> */}
			<ItemsDiv>
				{props.items &&
					props.items
						.filter((item) => {
							console.log("approxAcidVolLitres", item.approxAcidVolLitres);
							return (
								item.id.toString().includes(searchValue.toString()) ||
								item.newJis.toString().includes(searchValue.toString()) ||
								item.jis
									.toString()
									.toLowerCase()
									.includes(searchValue.toString().toLowerCase()) ||
								item.volt.toString().includes(searchValue.toString()) ||
								item.numberOfPlateCel.toString().includes(searchValue.toString()) ||
								item.ahCapacity20HrsRate.toString().includes(searchValue.toString()) ||
								item.reserveCapacityMinutes.toString().includes(searchValue.toString()) ||
								item.lengthMm.toString().includes(searchValue.toString()) ||
								item.widthMm.toString().includes(searchValue.toString()) ||
								item.heightMm.toString().includes(searchValue.toString()) ||
								item.approxAcidVolLitres.includes(searchValue) ||
								item.th.toString().includes(searchValue.toString()) ||
								item.assemblyLayout.toString().includes(searchValue.toString())
							);
						})
						.map((item) => (
							<Link style={{textDecoration:'none'}} to={`/yokomo/${item.id}`}>
								<div className="itemCard" key={item.id}>
									<img src={item.imageUrl} alt={item.jis} />
									<p>{item.jis}</p>
									<p>{item.din}</p>
								</div>
							</Link>
						))}
				
			</ItemsDiv>
			
		</div>
	);
};
export default YokomoPage;
