// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from './reducers';
import api from './reducers/api';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware), // add the RTK Query middleware
});

const { dispatch } = store;

export { store, dispatch };
