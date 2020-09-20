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
		
		width: 200px;
		height: 200px;
		-webkit-box-shadow: -5px 3px 21px 11px #0077be;
		-moz-box-shadow: -5px 3px 21px 11px #0077be;
		box-shadow: -5px 3px 21px 11px #0077be;
	}

	@media only screen and (max-width: 600px) {
		img{
		width: 150px;
		height:150px;
		}
		}
	}
	
	
	@media only screen and (min-width: 600px) {
		
	}
	
	
	@media only screen and (min-width: 768px) {...}
	
	
	@media only screen and (min-width: 992px) {...}
	
	
	@media only screen and (min-width: 1200px) {...}
`;
/* carousel will replace the 3 images below */
const BodyCarousel = () => {
	return (
		<Carousel>
			<Card >
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
