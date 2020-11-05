import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/admin/home/Home';
import { adminRoutes } from "./RouterConfig";
import { isLogined } from '../utils/Auth'

function AdminRouter() {
    return isLogined() ? (
        <Home>
            <Switch>
                {adminRoutes.map(route => {
                    return <Route exat key={route.path} path={route.path} render={routeProps => {
                        return <route.component {...routeProps} />
                    }}></Route>
                })}
                <Redirect to={adminRoutes[0].path} from='/admin'></Redirect>
                <Redirect to='/404'></Redirect>
            </Switch>
        </Home>
    ) : (
            <Redirect to='/login'></Redirect>
        )
}

export default AdminRouter
