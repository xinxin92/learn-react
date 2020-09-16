import React from 'react';
import {BrowserRouter, Link, Router,Switch,Route,NavLink,Prompt,Redirect} from 'react-router-dom';
import TestBasic from "./TestBasic";
import TestReduxStore from "./TestReduxStore";
import TestReduxContainer from "./TestReduxContainer";
import {Provider} from "react-redux";

class TestRouter extends React.Component
{
    render() {
        return (
            <div>
                <Provider store={TestReduxStore}>
                    <BrowserRouter>
                        <Prompt message="你确定要前往吗？" />
                        <NavLink to="/basic">basic</NavLink>
                        &nbsp;&nbsp;
                        <Link to="/counter">counter</Link>

                        <Switch>
                            <Route exact strict sensitie path='/basic' component={TestBasic}></Route>
                            <Route exact strict sensitie path='/counter' component={TestReduxContainer}></Route>
                        </Switch>

                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

export default TestRouter;