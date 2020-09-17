import {combineReducers, createStore} from "redux";
import TestRedux from './reducers/TestRedux';

const reducer = combineReducers({
    TestRedux,
});

const Store = createStore(reducer);

export default Store;