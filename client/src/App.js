<<<<<<< HEAD
import React from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import YokomoPage from './Components/Yokomo/YokomoPage';
import Contact from './Components/Contact';
import { Route } from 'react-router-dom';
import YokomoItem from './Components/Yokomo/YokomoItem';
||||||| merged common ancestors
import React from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import YokomoPage from './Components/Yokomo/YokomoPage';
import { Route } from 'react-router-dom';
import YokomoItem from './Components/Yokomo/YokomoItem';
=======
import React, { useState } from "react";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import YokomoPage from "./Components/Yokomo/YokomoPage";
import { Link, Route, Switch } from "react-router-dom";
import YokomoItem from "./Components/Yokomo/YokomoItem";
import yokomoData from "./Data/Yokomo";
import Header from "./Components/MainPage/Header/Header";
>>>>>>> 9f40800599caa7a82f038b137d99dfb0c891fe88

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <Route path="/items/:id" >
        <YokomoItem />
     </Route>
      <Route exact path ="/">
     <MainPage />
     </Route>
     <Route exact path ="/yokomo">
     <YokomoPage />
     </Route>
     <Route exact path ="/contact">
       <Contact />
     </Route>
    </div>
  );
||||||| merged common ancestors
  return (
    <div className="App">
      <Route path="/items/:id" >
        <YokomoItem />
     </Route>
      <Route exact path ="/">
     <MainPage />
     </Route>
     <Route exact path ="/yokomo">
     <YokomoPage />
     </Route>
    </div>
  );
=======
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
>>>>>>> 9f40800599caa7a82f038b137d99dfb0c891fe88
}

export default App;
