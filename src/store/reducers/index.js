// third-party
import { combineReducers } from 'redux';

// project import
import nav from './nav';
import menu from './menu';
import vineCard from './vineCard';
import api from './api';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ nav, menu, vineCard, [api.reducerPath]: api.reducer });

export default reducers;
