import React from "react";
// importing snacks
// import Home from "./Home";
// import Origami from "./Origami";
// import Eat from "./Eat";
// import Drink from "./Drink";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route exact path="/origami">
          {/* <Origami /> */}
        </Route>
        <Route exact path="/drink">
          {/* <Drink /> */}
        </Route>
        <Route exact path="/eat">
          {/* <Eat /> */}
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
