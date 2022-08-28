import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "../features/destination/destinationSlice";
import crewSlice from "../features/crew/crewSlice";
import navSlice from "../features/nav/navSlice";
import technologySlice from "../features/technology/technologySlice";


export const store = configureStore({
  reducer: {
    destination: destinationSlice,
    crew: crewSlice,
    nav: navSlice,
    technology: technologySlice,
  }
})
