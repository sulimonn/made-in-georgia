// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  openItem: 'home',
  defaultId: 'home',
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true,
};

// ==============================|| SLICE - MENU ||============================== //

const nav = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },
  },
});

export default nav.reducer;

export const { activeItem, activeComponent, openDrawer, openComponentDrawer } = nav.actions;
