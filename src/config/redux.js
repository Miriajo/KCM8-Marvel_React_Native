import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../redux/index';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
