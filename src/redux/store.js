import { configureStore } from "@reduxjs/toolkit";
import skillReducer from "./skillsSlice";
import dataReducer from "./dataSlice";
const store = configureStore({
  reducer: {
    skill: skillReducer,
    data: dataReducer,
  },
});

export default store;
