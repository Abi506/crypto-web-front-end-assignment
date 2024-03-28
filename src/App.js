import React from "react";
import Home from "./components/home"

import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const App=()=>(
    <Router>
        <Switch>
    <Route exact path='/' component={Home} />
    </Switch>
    </Router>
)
export default App