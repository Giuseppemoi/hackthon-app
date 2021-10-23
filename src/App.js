import React from "react";
import Restau from './components/Restau'
import Acceuil from './components/Acceuil'
import NavBar from './components/NavBar'
import Commerces from './components/Commerces'
import Loisir from './components/Loisir'
impo
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
                    {/*<Route path="/admin">*/}
                    {/*    <Admin />*/}
                    {/*</Route>*/}
                    {/*<Route path="/discover">*/}
                    {/*    <Discover />*/}
                    {/*</Route>*/}
                    {/*<Route path="/discoverDetail/:id">*/}
                    {/*    <DiscoverDetail />*/}
                    {/*</Route>*/}
                    {/*<Route path="/inspiration">*/}
                    {/*    <Inspiration />*/}
                    {/*</Route>*/}
                    <Route path="/inspiration/restau">
                        <Restau />
                    </Route>
                    <Route path="/inspiration/Commerces">
                        <Commerces />
                    </Route>
                    <Route path="/inspiration/Loisir">
                        <Loisir />
                    </Route>
                    {/*<Route path="/detail">*/}
                    {/*    <Detail />*/}
                    {/*</Route>*/}
                </Switch>
            </div>
        </Router>
    );
}