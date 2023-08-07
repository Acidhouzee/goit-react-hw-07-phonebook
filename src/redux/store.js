import { configureStore } from "@reduxjs/toolkit";
import { formDatailsReducer } from "redux/contactSlice";
import { formFilterReduser } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: formDatailsReducer,
    filter: formFilterReduser,
  },
});
