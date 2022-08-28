import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navNumber: "",
  navHeading: "",
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNavNumber: (state, action) => {
      state.navNumber = action.payload;
    },
    setHeading: (state, action) => {
      state.navHeading = action.payload;
    },
  },
});

export const { setHeading, setNavNumber } = navSlice.actions;

export default navSlice.reducer;
