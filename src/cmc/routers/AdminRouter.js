import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { adminRoutes } from "./RouterConfig";

function AdminRouter() {
    return (
        <div>
            <Switch>
                {adminRoutes.map(route => {
                    return <Route exat key={route.path} path={route.path} render={routeProps => {
                        return <route.component {...routeProps} />
                    }}></Route>
                })}
                <Redirect to='/404'></Redirect>
            </Switch>
        </div>
    )
}

export default AdminRouter
