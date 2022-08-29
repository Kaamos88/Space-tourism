import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navNumber: "",
  navHeading: "",
  isOpen: false,
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
    openNav: (state) => {
      state.isOpen = true;
    },
    closeNav: (state) => {
      state.isOpen = false;
    }
  },
});

export const { setHeading, setNavNumber, openNav, closeNav } = navSlice.actions;

export default navSlice.reducer;
