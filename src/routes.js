import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Main from './pages/Main';
import Details from './pages/Details';
import Update from './pages/Update';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/details/:id" component={Details} />
            <Route path="/update/:id" component={Update} />
        </Switch>
    </BrowserRouter>
)

export default Routes;