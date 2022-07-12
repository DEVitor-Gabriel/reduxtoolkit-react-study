import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  counter: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter(state, action) {
      state.counter = state.counter + 1;
    },
    decrementCounter(state, action){
      state.counter = state.counter - 1;
    }
  }
});

export default counterSlice;
