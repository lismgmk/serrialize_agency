import { configureStore } from '@reduxjs/toolkit';
import { currentBodyRowsSlice } from 'redux/slices/currentBodyRows';
import { filterSystemSlice } from 'redux/slices/filterSystem';

export const store = configureStore({
  reducer: {
    currentBodyRows: currentBodyRowsSlice.reducer,
    filterSystem: filterSystemSlice.reducer,
  },
  devTools: true,
});
export const createStore = () => store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
