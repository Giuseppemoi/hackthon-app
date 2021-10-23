return (
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Acceuil />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/discover">
                        <Discover />
                    </Route>
                    <Route path="/discoverDetail/:id">
                        <DiscoverDetail />
                    </Route>
                    <Route path="/inspiration">
                        <Inspiration />
                    </Route>
                    <Route path="/detail">
                        <Detail />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}