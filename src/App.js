import './App.css';
import "antd/dist/antd.css";
import React from 'react';
import Test from "./test/Test";
import MainRouter from './cmc/routers/MainRouter';


class App extends React.Component
{
    render() {
        return (
            // <Test />
            <MainRouter />
        );
    }
}

export default App;
