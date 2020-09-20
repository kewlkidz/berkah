import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

const HeaderDiv = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	background-color: #0077be;

	@media only screen and (max-width: 600px) {
	// display:flex;
	// flex-direction: row;
	// padding: 20px 0;
	}
	
	
	@media only screen and (min-width: 600px) {...}
	
	
	@media only screen and (min-width: 768px) {...}
	
	
	@media only screen and (min-width: 992px) {...}
	
	
	@media only screen and (min-width: 1200px) {...}
`;

const Header = (props) => {
	const { searchValue, setSearchValue, test } = props;
	console.log("test in header", test);
	return (
		<HeaderDiv>
			<Logo />
			<Nav />

			<SearchBar searchValue={searchValue} setSearchValue={setSearchValue} test={test} />
		</HeaderDiv>
	);
};

export default Header;
