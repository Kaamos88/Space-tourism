import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "../features/destination/destinationSlice";

export const store = configureStore({
  reducer: {
    destination: destinationSlice,
  }
})
