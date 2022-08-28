import { createSlice } from "@reduxjs/toolkit";
import technologyList from "../../data/technologyList";

const initialState = {
  technology: technologyList[0],
  activeTechnology: 0,
};

const technologySlice = createSlice({
  name: "technology",
  initialState,
  reducers: {
    showTechnology: (state, action) => {
      state.technology = technologyList[action.payload];
      state.activeTechnology = action.payload;
    },
  },
});

export const { showTechnology } = technologySlice.actions;

export default technologySlice.reducer;
