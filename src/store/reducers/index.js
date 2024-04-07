// third-party
import { combineReducers } from 'redux';

// project import
import nav from './nav';
import menu from './menu';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ nav, menu });

export default reducers;
