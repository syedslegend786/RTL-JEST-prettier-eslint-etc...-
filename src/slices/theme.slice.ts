import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: { theme: "light" | "dark" } = {
  theme: "light",
};

export const counterSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
