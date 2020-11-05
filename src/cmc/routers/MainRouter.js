import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {mainRoutes} from "./RouterConfig";
import AdminRouter from "./AdminRouter";

class MainRouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/admin" render={routeProps=><AdminRouter {...routeProps} />}></Route>
                        {mainRoutes.map(route => {
                            return <Route exat key={route.path} {...route}></Route>
                        })}
                        <Redirect to='/admin' from='/'></Redirect>
                        <Redirect to='/404'></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default MainRouter