import logo from "./logo.svg";
import LevelHome from "./components/levelHome/LevelHome.js";
import Level0 from "./components/level0/Level0.js";
import Level01 from "./components/level01/Level01.js";
import Level02 from "./components/level02/Level02.js";
import Level03 from "./components/level03/Level03.js";
import Level04 from "./components/level04/Level04.js";
import Level05 from "./components/level05/Level05.js";
import Level06 from "./components/level06/Level06.js";
import LevelFinal from "./components/levelFinal/LevelFinal.js";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/0" component={Level0}></Route>
        <Route path="/1" component={Level01}></Route>
        <Route path="/2" component={Level02}></Route>
        <Route path="/3" component={Level03}></Route>
        <Route path="/4" component={Level04}></Route>
        <Route path="/5" component={Level05}></Route>
        <Route path="/6" component={Level06}></Route>
        <Route path="/final" component={LevelFinal}></Route>
        <Route path="/" component={Level0}></Route>
      </Switch>
    </div>
  </Router>
);

export default App;
