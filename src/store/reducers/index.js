// third-party
import { combineReducers } from 'redux';

// project import
import nav from './nav';
import menu from './menu';
import vineCard from './vineCard';
<<<<<<< HEAD
import api from './api';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ nav, menu, vineCard, [api.reducerPath]: api.reducer });
=======

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ nav, menu, vineCard });
>>>>>>> bf8cca8 (Initial commit to second branch)

export default reducers;
