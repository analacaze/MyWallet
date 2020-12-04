import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from './Main';
import Principal from './Principal';

export default function App(){
    return (
        <Router>
            <Switch>  
                <Route path='/principal'>
                    <Principal />
                </Route>              
                <Route path='/'>
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
}