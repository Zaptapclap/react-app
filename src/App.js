import React from 'react';
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Source from "./components/Source";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
    <div>
        <Router>
            <TopBar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/source" component={Source}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
