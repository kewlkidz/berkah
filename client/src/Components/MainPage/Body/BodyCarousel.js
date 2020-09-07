import React from "react";
import styled from "styled-components";
import image from "../../../Data/battery2.jpeg";
import Carousel from "react-elastic-carousel";

const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 300px;
	img {
		margin: 0 70px;
		margin-top: 100px;
		width: 200px;
		height: 200px;
		-webkit-box-shadow: -5px 3px 21px 11px rgba(110, 6, 110, 1);
		-moz-box-shadow: -5px 3px 21px 11px rgba(110, 6, 110, 1);
		box-shadow: -5px 3px 21px 11px rgba(110, 6, 110, 1);
	}
`;
/* carousel will replace the 3 images below */
const BodyCarousel = () => {
	return (
		<Carousel className="">
			<Card>
				<img src={image} alt="battery placeholder" />
			</Card>
			<Card>
				<img src={image} alt="battery placeholder" />
			</Card>
			<Card>
				<img src={image} alt="battery placeholder" />
			</Card>
		</Carousel>
	);
};
export default BodyCarousel;
