import {combineReducers} from 'redux';
import counter from './counter';
import todo from './todo';

//main-state(store)
export default combineReducers({counter, todo});