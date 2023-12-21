import React from "react";
import Home from "./Home";
import Origami from "./snacks/Origami";
import Pizza from "./snacks/Pizza";
import Drink from "./snacks/Drink";
import NavBar from "./NavBar.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />

				<Routes>
					<Route exact path="/" element=<Home /> />
					<Route exact path="/origami" element=<Origami /> />
					<Route exact path="/drink" element=<Drink /> />
					<Route exact path="/pizza" element=<Pizza /> />
				</Routes>

				{/* React-Routes-DOM V5 Syntax not compatable with react v18*/}

				{/* <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/origami">
          <Origami />
        </Route>
        <Route exact path="/drink">
          <Drink />
        </Route>
        <Route exact path="/pizza">
          <Pizza />
        </Route> */}
				{/* React-Routes-DOM V6 Syntax */}
			</BrowserRouter>
		</div>
	);
}

export default App;
