import { createSlice } from "@reduxjs/toolkit";
import crewList from "../../data/crewList";

const initialState = {
  person: crewList[0],
  activePerson: 0,
};

const crewSlice = createSlice({
  name: "crew",
  initialState,
  reducers: {
    showPerson: (state, action) => {
      state.person = crewList[action.payload];
      state.activePerson = action.payload;
    },
  },
});

export const { showPerson } = crewSlice.actions;

export default crewSlice.reducer;
