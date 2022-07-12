import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sleep } from '../../common/utils';

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
    decrementCounter(state, action) {
      state.counter = state.counter - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.counter = state.counter + action.payload;
      })
  }
});

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (incNumber, _thunkAPI) => {
    await sleep(3000);
    return incNumber; // => action.payload
  }
);

export default counterSlice;
