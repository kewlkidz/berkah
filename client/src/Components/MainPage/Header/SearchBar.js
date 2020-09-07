import React from "react";
import styled from "styled-components";

const FormCont = styled.form`
	display: flex;
	position: absolute;
	right: 0;
	padding: 0 20px;
`;

const SearchBar = (props) => {
	const { searchValue, setSearchValue, test } = props;
	console.log("test in Searchbar", test);
	const onInputChange = (event) => {
		const { value } = event.target;
		console.log("searchvalue", searchValue);
		setSearchValue(value);
	};
	return (
		<FormCont>
			<input
				type="text"
				placeholder="Search"
				value={searchValue}
				onChange={onInputChange}
			></input>
		</FormCont>
	);
};

export default SearchBar;
