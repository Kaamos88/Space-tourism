import { createSlice } from "@reduxjs/toolkit";
import destinationList from "../../data/destinationList";

const initialState = {
  planet: destinationList[0],
  navNumber: "00",
  heading: "Pick your destination",
  activePlanet: 0,
};

const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    showPlanet: (state, action) => {
      state.planet = destinationList[action.payload];
      state.activePlanet = action.payload;
    },
  },
});

export const { showPlanet } = destinationSlice.actions;

export default destinationSlice.reducer;
