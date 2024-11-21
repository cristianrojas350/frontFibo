import { createSlice } from '@reduxjs/toolkit';

const fibonacciSlice = createSlice({
  name: 'fibonacci',
  initialState: {
    series: [], // Estado para almacenar la serie Fibonacci
  },
  reducers: {
    setSeries: (state, action) => {
      state.series = action.payload;
    },
  },
});

export const { setSeries } = fibonacciSlice.actions;
export default fibonacciSlice.reducer;
