import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Ml from './Ml';
 function Router() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path='/' component={App} exact />
                    <Route path='/Ml' component={Ml} />
                </Switch>
        </BrowserRouter>
    ) 
}
export default Router;
