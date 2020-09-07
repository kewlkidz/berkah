import React, { useState } from "react";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import YokomoPage from "./Components/Yokomo/YokomoPage";
import { Link, Route, Switch } from "react-router-dom";
import YokomoItem from "./Components/Yokomo/YokomoItem";
import yokomoData from "./Data/Yokomo";
import Header from "./Components/MainPage/Header/Header";

function App() {
	const [products, setProducts] = useState(yokomoData);
	const [searchValue, setSearchValue] = useState("");
	const [test, setTest] = useState("this is test from YokomoPage");

	return (
		<div className="App">
			<Header searchValue={searchValue} setSearchValue={setSearchValue} test={test} />
			<Switch>
				<Route path="/yokomo/:banana">
					<YokomoItem items={products} />
				</Route>

				<Route
					exact
					path="/yokomo"
					render={(props) => {
						console.log("react router props", props);
						return (
							<YokomoPage history={props.history} items={products} searchValue={searchValue} />
						);
					}}
				/>

				<Route exact path="/">
					<MainPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
