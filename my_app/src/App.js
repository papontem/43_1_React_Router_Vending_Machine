import React from "react";
import Home from "./Home";
import Origami from "./snacks/Origami";
import Pizza from "./snacks/Pizza";
import Drink from "./snacks/Drink";
import NavBar from "./NavBar.js";

import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  console.log("Current path:");
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
        <nav className="HTML-Navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/origami"}>Origami</Link>
          <Link to={"/drink"}>Drink</Link>
          <Link to={"/pizza"}>Pizza</Link>
        </nav>
				<Route exact path="/">
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
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
