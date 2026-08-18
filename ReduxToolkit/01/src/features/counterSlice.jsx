import { createSlice } from "@reduxjs/toolkit";

// createSlice has 3 things: name, initialState, reducers
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  // Ye actions hi hai just named as reducers
  reducers: {
    increment: (state,action) => {
      state.count += action.payload || 1;
      console.log(action);
    },
    decrement: (state,action) => {
      state.count-- ;
      console.log(action);
    }
  }
});

console.log("Slice —> ", counterSlice);

// counterSlice.reducer(s) —> counterSlice.actions {same same}
export const { increment, decrement } = counterSlice.actions;

// This is a reducer not a action IT IS NOT REDUCER(S) Check the (s)
export default counterSlice.reducer;