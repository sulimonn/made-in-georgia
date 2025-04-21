// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from './reducers';
<<<<<<< HEAD
import api from './reducers/api';
=======
>>>>>>> bf8cca8 (Initial commit to second branch)

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
<<<<<<< HEAD
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware), // add the RTK Query middleware
=======
  reducer: reducers
>>>>>>> bf8cca8 (Initial commit to second branch)
});

const { dispatch } = store;

export { store, dispatch };
