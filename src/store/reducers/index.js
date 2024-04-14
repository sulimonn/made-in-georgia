// third-party
import { combineReducers } from 'redux';

// project import
import nav from './nav';
import menu from './menu';
import vineCard from './vineCard';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ nav, menu, vineCard });

export default reducers;
