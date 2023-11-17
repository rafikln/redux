import { configureStore } from "@reduxjs/toolkit";
import listeReducer from "./slices/f";
const state = configureStore({
  reducer: {
    listState: listeReducer,
  },
});
export default state;
