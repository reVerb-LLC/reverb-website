import React from "react";
import NavigationBar from "./containers/NavigationBar";
import Home from "./containers/Home";
import Docs from "./containers/Docs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                <NavigationBar />
                <div>
                    <Switch>
                        <Route path="/docs" component={Docs} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </div>
            <div className="footer" />
        </Router>
    );
}

export default App;
