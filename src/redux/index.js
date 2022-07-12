import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './modules/counter';

const reducers = {
  counter: counterSlice.reducer,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
