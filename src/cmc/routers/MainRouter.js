import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {mainRoutes} from "./RouterConfig";
import Main from "../pages/admin/home/Main";

class MainRouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/admin" render={routeProps=><Main {...routeProps} />}></Route>
                        {mainRoutes.map(route => {
                            return <Route exat key={route.path} {...route}></Route>
                        })}
                        <Redirect to='/404'></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default MainRouter