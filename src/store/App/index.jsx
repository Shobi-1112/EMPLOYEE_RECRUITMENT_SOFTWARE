import { configureStore } from "@reduxjs/toolkit";
import incrementReducer from "./Incrementslice"; 

export const store = configureStore({
  reducer: {
    increment: incrementReducer, 
  },
});
