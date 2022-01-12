import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Figure from './Figure';
import Navbar from './Navbar';

const Passing = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/figure/:types/:colors">
                    <Figure/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Passing;